import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import * as clientApis from "apis/client";

import NavBar from "components/client/organisms/navBar";
import TitledContents from "components/client/organisms/TitledContents";
import MainImageCard from "components/client/organisms/MainImageCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [meals, setMeals] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    const userId = Cookies.get("user-id") as string;
    async function getVideo() {
      const data = await clientApis.getContents(userId, "video");
      setVideos(data.result);
    }

    async function getMeals() {
      const data = await clientApis.getContents(userId, "meal");
      setMeals(data.result);
    }

    async function getEquipment() {
      const data = await clientApis.getContents(userId, "equipment");
      setEquipments(data.result);
    }

    getMeals();
    getEquipment();
    getVideo();
  }, []);

  console.log(videos, meals, equipments);
  return (
    <div>
      <NavBar />
      <MainImageCard />
      <TitledContents
        title="Videos"
        contents={[
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video",
            training_purpose: "Body"
          },
          {
            link: "https://www.youtube.com/watch?v=VNQpP6C1fJg",
            title: "video2",
            training_purpose: "Muscle"
          },
          {
            link: "https://www.youtube.com/watch?v=VVn5IUM8sms",
            title: "video3",
            training_purpose: "Diet"
          },
          {
            link: "https://www.youtube.com/watch?v=1GruyO_L6Vo",
            title: "video4",
            training_purpose: "Body"
          },
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video5",
            training_purpose: "Muscle"
          },
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video6",
            training_purpose: "Diet"
          }
        ]}
        icon={""}
        type="video"
      />
      <TitledContents
        title="Meals"
        contents={[
          {
            title: "meal",
            carbohydrate: "10g",
            protein: "10g",
            fat: "10g",
            serving_size: "10g",
            training_purpose: "Body"
          }
        ]}
        icon={""}
      />
      <TitledContents
        title="Equipments"
        contents={[
          {
            title: "equipment",
            price: "1000",
            seller: "mike",
            shipping_charge: "1000",
            training_purpose: "Body"
          },
          {
            title: "equipment",
            price: "1000",
            seller: "me",
            shipping_charge: "1000",
            training_purpose: "Muscle"
          }
        ]}
        icon={""}
      />
    </div>
  );
};

export default Home;
