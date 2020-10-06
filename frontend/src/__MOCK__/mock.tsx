import React from "react";
import { Tag, Badge, Space } from "antd";

export const recommendTags = ["muscle", "diet", "body-shape"];

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
    title: "Subject",
    key: "subject",
    dataIndex: "subject",
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
  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Update</a>
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
    subject: ["diet"],
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
