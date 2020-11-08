import React from "react";

import NavBar from "components/client/organisms/navBar";
import TitledContents from "components/client/organisms/TitledContents";

const Home = () => {
  return (
    <div>
      <NavBar />

      <TitledContents
        title="Videos"
        contents={[
          { link: "", title: "video", content: "video content" },
          { link: "", title: "video2", content: "video content 2" },
          { link: "", title: "video3", content: "video content 3" },
          { link: "", title: "video4", content: "video content 4" },
          { link: "", title: "video5", content: "video content 5" },
          { link: "", title: "video6", content: "video content 6" },
        ]}
        icon={""}
      />
      <TitledContents
        title="Meals"
        contents={[{ link: "", title: "meal", content: "meal content" }]}
        icon={""}
      />
      <TitledContents
        title="Equipments"
        contents={[
          { link: "", title: "equipment", content: "equipment content" },
          { link: "", title: "equipment 2", content: "equipment content 2" },
        ]}
        icon={""}
      />
    </div>
  );
};

export default Home;
