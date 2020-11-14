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
            training_purpose: "body"
          },
          {
            link: "https://www.youtube.com/watch?v=VNQpP6C1fJg",
            title: "video2",
            training_purpose: "muscle"
          },
          {
            link: "https://www.youtube.com/watch?v=VVn5IUM8sms",
            title: "video3",
            training_purpose: "diet"
          },
          {
            link: "https://www.youtube.com/watch?v=1GruyO_L6Vo",
            title: "video4",
            training_purpose: "body"
          },
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video5",
            training_purpose: "muscle"
          },
          {
            link: "https://www.youtube.com/watch?v=3VouSaW_LPw",
            title: "video6",
            training_purpose: "diet"
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
            training_purpose: "body"
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
            training_purpose: "body"
          },
          {
            title: "equipment",
            price: "1000",
            seller: "me",
            shipping_charge: "1000",
            training_purpose: "muscle"
          }
        ]}
        icon={""}
      />
    </div>
  );
};

export default Home;
