// import React, { useState } from 'react'
// import NavBar from './nav'
// import { useMediaQuery } from 'react-responsive'
// import Sidebar from './sidebar'

// const Dashboard = () => {

//     const isSmallScreen = useMediaQuery({ maxDeviceWidth: 1023 })

//     const [main, setMain] = useState(
//         [
//             { name: "เมนู" },
//         ]
//     )

//     const [sidebar, setSidebar] = useState(
//         [
//             { name: "ข้อมูลทั่วไป", href: "/main" },
//             { name: "ข้อมูลด้านสุขภาพ", href: "/main/hospital" },
//             { name: "ข้อมูลด้านสังคม", href: "/main/social" },
//             { name: "ข้อมูลด้านเศรษฐกิจ", href: "/main/economy" },
//             { name: "ข้อมูลด้านการช่วยเหลือ", href: "/main/service" },
//         ]
//     )

//     const [min, setMin] = useState(
//         [
//             { name: "ข้อมูลทั่วไป", href: "/main" },
//             { name: "ข้อมูลด้านสุขภาพ", href: "/main/hospital" },
//             { name: "ข้อมูลด้านสังคม", href: "/main/social" },
//             { name: "ข้อมูลด้านเศรษฐกิจ", href: "/main/economy" },
//             { name: "ข้อมูลด้านการช่วยเหลือ", href: "/main/service" },
//         ]
//     )

//     return (
//         <React.Fragment>
//             <NavBar name="main" tab={isSmallScreen ? min : main} sidebar={sidebar} />
//         </React.Fragment>
//     )
// }
// export default Dashboard

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard

// ReactDOM.render(<SiderDemo />, mountNode);
// #components-layout-demo-custom-trigger .trigger {
//   font-size: 18px;
//   line-height: 64px;
//   padding: 0 24px;
//   cursor: pointer;
//   transition: color 0.3s;
// }

// #components-layout-demo-custom-trigger .trigger:hover {
//   color: #1890ff;
// }

// #components-layout-demo-custom-trigger .logo {
//   height: 32px;
//   background: rgba(255, 255, 255, 0.2);
//   margin: 16px;
// }

// .site-layout .site-layout-background {
//   background: #fff;
// }