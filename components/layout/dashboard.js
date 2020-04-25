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
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {


    const [sidebar, setSidebar] = useState(
        [
            { name: "ข้อมูลทั่วไป", href: "/main" },
            { name: "ข้อมูลด้านสุขภาพ", href: "/main/hospital" },
            { name: "ข้อมูลด้านสังคม", href: "/main/social" },
            { name: "ข้อมูลด้านเศรษฐกิจ", href: "/main/economy" },
            { name: "ข้อมูลด้านการช่วยเหลือ", href: "/main/service" },
        ]
    )

    const [collapsed, setCollapsed] = useState(false)


    const toggle = () => {

        setCollapsed(!collapsed)

    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu defaultSelectedKeys={['1']}>
                    {
                        sidebar.map((item, index) => (
                            <Menu.Item key={index}>
                                <UserOutlined />
                                <span>{item.name}</span>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
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


export default Dashboard