import React from "react";
import { Tag, Badge, Space } from "antd";

export const recommendTags = ["muscle", "diet", "body-shape"];

export enum dataColumn {
  video = "video",
  meal = "meal",
  equipment = "equipment",
  user = "user",
}

export const dataColumns = {
  [dataColumn.video]: [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Uploader",
      dataIndex: "uploader",
      key: "uploader",
      render: (text: any) => <Tag>{text}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ],
  [dataColumn.meal]: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "Carbohydrate",
      dataIndex: "carbohydrate",
      key: "carbohydrate",
      render: (text: any) => <Tag color="geekblue">{text}</Tag>,
    },
    {
      title: "protein",
      dataIndex: "protein",
      key: "protein",
      render: (text: any) => <Tag color="green">{text}</Tag>,
    },
    {
      title: "fat",
      dataIndex: "fat",
      key: "fat",
      render: (text: any) => <Tag color="red">{text}</Tag>,
    },
    {
      title: "calory",
      dataIndex: "calory",
      key: "calory",
      render: (text: any) => <Tag>{text}</Tag>,
    },
    {
      title: "serving_size",
      dataIndex: "serving_size",
      key: "serving_size",

      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "training_purpose",
      dataIndex: "training_purpose",
      key: "training_purpose",

      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ],
  [dataColumn.equipment]: [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },

    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ],
};
export const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },

  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

export const data = [
  {
    key: "1",
    title: "diet video",
    content: "contents",
    subject: ["body-shape"],
    category: "video",
  },
  {
    key: "2",
    title: "meal 1",
    content: "contents",
    subject: ["muscle"],
    category: "meal",
  },
  {
    key: "3",
    title: "equipment1",
    content: "contents",
    subject: ["diet"],
    category: "equipment",
  },
];

export const userExpandColumns = [
  { title: "Goal", dataIndex: "goal", key: "goal" },
  { title: "Detailed", dataIndex: "detailed", key: "detailed" },
  { title: "Date", dataIndex: "date", key: "date" },
  {
    title: "CheckDate",
    key: "checkdate",
    dataIndex: "checkdate",
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export const userExpandData = [
  {
    key: 0,
    date: "2019-12-24 23:12:00",
    goal: "diet",
    detailed: "-5kg",
    checkdate: ["MON", "TUE"],
  },
];

export const userData = [
  {
    key: 0,
    name: `User`,
    createdAt: "2014-12-24 23:12:00",
  },
];

export const userColumns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Create date", dataIndex: "createdAt", key: "createdAt" },
  { title: "Action", key: "operation", render: () => <a>Delete</a> },
];
