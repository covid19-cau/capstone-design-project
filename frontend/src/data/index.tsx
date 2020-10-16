import React from "react";
import { Tag, Badge, Space } from "antd";

export const recommendTags = ["muscle", "Weight loss", "body-shape"];

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
  ],
  [dataColumn.equipment]: [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "seller",
      dataIndex: "seller",
      key: "seller",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "shipping_charge",
      dataIndex: "shipping_charge",
      key: "shipping_charge",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "training_purpose",
      dataIndex: "training_purpose",
      key: "training_purpose",
      render: (text: any) => <Tag>{text}</Tag>,
    },
  ],
  [dataColumn.user]: [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "password",
      dataIndex: "password",
      key: "password",
      render: (text: any) => <p>{text}</p>,
    },
  ],
};

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
