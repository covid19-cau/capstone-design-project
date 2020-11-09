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
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video",
            content: "video content",
          },
          {
            link: "https://www.youtube.com/watch?v=VNQpP6C1fJg",
            title: "video2",
            content: "video content 2",
          },
          {
            link: "https://www.youtube.com/watch?v=VVn5IUM8sms",
            title: "video3",
            content: "video content 3",
          },
          {
            link: "https://www.youtube.com/watch?v=1GruyO_L6Vo",
            title: "video4",
            content: "video content 4",
          },
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video5",
            content: "video content 5",
          },
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video6",
            content: "video content 6",
          },
        ]}
        icon={""}
        type="video"
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
