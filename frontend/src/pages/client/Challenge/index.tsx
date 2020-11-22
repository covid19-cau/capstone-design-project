import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import * as clientApis from "apis/client";

import NavBar from "components/client/organisms/navBar";

import ChallengeForm from "components/client/templates/ChallengeForm";
import ChallengeList from "components/client/templates/ChallengeList";

function Challenge() {
  const [challenge, setChallenge] = useState();

  useEffect(() => {
    async function getChallengeInfo() {
      const userId = Cookies.get("user-id") as string;
      const challengeInfo = await clientApis.getChallenge(userId);
      setChallenge(challengeInfo);
    }
    getChallengeInfo();
  }, []);

  return (
    <>
      <NavBar />
      {challenge ? <ChallengeList {...challenge} /> : <ChallengeForm />}
    </>
  );
}

export default Challenge;
