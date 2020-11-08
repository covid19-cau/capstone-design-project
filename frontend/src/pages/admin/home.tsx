import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import useSWR from "swr";

import { UserOutlined } from "@ant-design/icons";

import UserManageTable from "components/admin/UserManageTable";
import RecommendManageTable from "components/admin/RecommendManageTable";

import * as adminApis from "apis/admin";

import { dataColumns, dataColumn } from "data";

import styles from "./styles.module.scss";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<dataColumn>(dataColumn.video);

  const { data: listData, mutate } = useSWR(
    `${process.env.REACT_APP_DEV_API_URL}/admin/${selectedKey}`
  );

  const registerContents = (params: object) => {
    async function register() {
      await adminApis
        .registerContents(selectedKey, params)
        .then(() => mutate());
    }

    register();
  };

  const updateContents = (params: object) => {
    async function update() {
      await adminApis.updateContents(selectedKey, params).then(() => mutate());
    }

    update();
  };

  const deleteContents = (params: object) => {
    async function deleteContent() {
      await adminApis.deleteContents(selectedKey, params).then(() => mutate());
    }

    deleteContent();
  };

  return (
    <Layout className={styles.layout}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Admin</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["video"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={(data) => setSelectedKey(data.key as dataColumn)}
          >
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="Recommended Manage"
            >
              <Menu.Item key="video">Video</Menu.Item>
              <Menu.Item key="meal">Meal</Menu.Item>
              <Menu.Item key="equipment">Equipment</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="User Manage">
              <Menu.Item key="user">User</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Recommend</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {selectedKey === dataColumn.user ? (
              <UserManageTable
                columns={dataColumns[selectedKey]}
                data={listData}
              />
            ) : (
              <RecommendManageTable
                data={listData}
                columns={dataColumns[selectedKey]}
                selectedKey={selectedKey}
                registerContents={registerContents}
                updateContents={updateContents}
                deleteContents={deleteContents}
              />
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
