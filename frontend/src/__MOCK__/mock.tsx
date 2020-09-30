import React from "react";
import { Tag, Badge, Space } from "antd";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
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
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export const userExpandColumns = [
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Status",
    key: "state",
    render: () => (
      <span>
        <Badge status="success" />
        Finished
      </span>
    ),
  },
  {
    title: "Action",
    dataIndex: "operation",
    key: "operation",
    render: () => (
      <Space size="middle">
        <a>Pause</a>
        <a>Stop</a>
      </Space>
    ),
  },
];

export const userExpandData = [
  {
    key: 0,
    date: "2014-12-24 23:12:00",
    name: "This is production name",
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
  { title: "Action", key: "operation", render: () => <a>Do something</a> },
];
