import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Skeleton } from "antd";

import * as clientApis from "apis/client";

import NavBar from "components/client/organisms/navBar";
import TitledContents from "components/client/organisms/TitledContents";
import MainImageCard from "components/client/organisms/MainImageCard";

const SkeletonComponent: React.FC = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Skeleton avatar paragraph={{ rows: 4 }} />
    </div>
  );
};

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [meals, setMeals] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    const userId = Cookies.get("user-id") as string;
    async function getVideo() {
      const data = await clientApis.getContents(userId, "video");
      setVideos(data);
    }

    async function getMeals() {
      const data = await clientApis.getContents(userId, "meal");
      setMeals(data);
    }

    async function getEquipment() {
      const data = await clientApis.getContents(userId, "equipment");
      setEquipments(data);
    }

    getMeals();
    getEquipment();
    getVideo();
  }, []);

  return (
    <div>
      <NavBar />
      <MainImageCard />

      {videos?.length === 0 ? (
        <SkeletonComponent />
      ) : (
        <TitledContents
          title="Videos"
          contents={videos}
          icon={""}
          type="video"
        />
      )}
      {meals?.length === 0 ? (
        <div style={{ padding: "30px" }}>
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </div>
      ) : (
        <TitledContents title="Meals" contents={meals} icon={""} />
      )}
      {equipments?.length === 0 ? (
        <div style={{ padding: "30px" }}>
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </div>
      ) : (
        <TitledContents
          title="Equipments"
          contents={equipments}
          icon={""}
          type="equipment"
        />
      )}
    </div>
  );
};

export default Home;
