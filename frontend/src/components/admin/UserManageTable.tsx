import React from "react";
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

const UserManageTable = () => {
  const expandedRowRender = () => {
    const columns = [
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
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: "2014-12-24 23:12:00",
        name: "This is production name",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Create date", dataIndex: "createdAt", key: "createdAt" },
    { title: "Action", key: "operation", render: () => <a>Do something</a> },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: `User${i}`,
      createdAt: "2014-12-24 23:12:00",
    });
  }

  return (
    <Table
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
  );
};

export default UserManageTable;
