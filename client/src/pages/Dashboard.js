import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";

import Chart from "../components/Charts/Chart";
import TableData from "../components/TableData";
import IntroduceBox from "../components/IntroduceBox/IntroduceBox";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
            <Menu.Item key='1' />
            <Menu.Item icon={<EnvironmentOutlined />} key='3'>
              Điểm Đăng Ký
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} key='3'>
              Thành Viên
            </Menu.Item>
            <Menu.Item icon={<AlignLeftOutlined />} key='1'>
              Thống Kê
            </Menu.Item>
            <Menu.Item key='9' icon={<UserOutlined />}>
              Thông Tin Tài Khoản
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Body */}
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* Components */}
              <IntroduceBox />
              <Chart />
              <TableData />
            </div>
          </Content>

          {/* Footer */}
          <Footer style={{ textAlign: "center" }}>
            SOS DashBoard Created by SOS team
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;