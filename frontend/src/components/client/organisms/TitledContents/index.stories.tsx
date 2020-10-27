import React from "react";

import homeIcon from "assets/images/home.png";

import TitledContents from "./index";

export default {
  title: "DesignSystem|organisms/Titledcontents",
  component: TitledContents,
};

const contents = [
  {
    title: "LH ",
    content: "LH사이트",
    link: "https://www.lh.or.kr/",
  },
  {
    title: "SH",
    content: "SH사이트",
    link: "https://www.i-sh.co.kr/main/index.do",
  },
];

export const defaultTitledContents = () => (
  <TitledContents contents={contents} title="제목" icon={homeIcon} />
);
