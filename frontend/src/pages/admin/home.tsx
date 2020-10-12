import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";

import UserManageTable from "components/admin/UserManageTable";
import RecommendManageTable from "components/admin/RecommendManageTable";

import * as adminApis from "apis/admin";

import {
  data,
  columns,
  userColumns,
  userData,
  dataColumns,
  dataColumn,
} from "__MOCK__/mock";

import styles from "./styles.module.scss";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
  const [recommendContents, setRecommendContents] = useState([]);
  const [selectedKey, setSelectedKey] = useState<dataColumn>(dataColumn.video);

  useEffect(() => {
    async function getLists() {
      const data = await adminApis.getRecommendContents(selectedKey);
      setRecommendContents(data);
    }

    getLists();
  }, [selectedKey]);

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
              <UserManageTable columns={userColumns} data={userData} />
            ) : (
              <RecommendManageTable
                data={recommendContents}
                columns={dataColumns[selectedKey]}
                selectedKey={selectedKey}
              />
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
