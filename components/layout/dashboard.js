import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { Progress } from 'antd';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
} from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faHospital, faBuilding, faNewspaper } from '@fortawesome/free-regular-svg-icons'


import NavBar from './nav';
import Error from '../error';

const { Header, Sider, Content } = Layout;

const Dashboard = props => {

    const isLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 769 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })

    const [navbar, setNavbar] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "ติดต่อ", href: "/index/contact" },
        ]
    )

    const [sidebar, setSidebar] = useState(
        [
            { name: "หน้าหลัก", href: "/main" },
            { name: "ด้านทั่วไป", href: "/main/people" },
            { name: "ด้านสุขภาพ", href: "/main/hospital" },
            { name: "ด้านสังคม", href: "/main/social" },
            { name: "ด้านเศรษฐกิจ", href: "/main/economy" },
            { name: "ด้านการช่วยเหลือ", href: "/main/service" },
        ]
    )
    const [status, setStatus] = useState(false)
    const [collapsed, setCollapsed] = useState(false)
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(0)
    const [userOauth, setUserOauth] = useState()

    useEffect(() => {
        fetchData()
        function progress() {
            setCompleted(oldCompleted => {
                if (oldCompleted === 100) {
                    return 0;
                }
                const diff = Math.random() * 20;
                return Math.min(oldCompleted + diff, 100);
            });
            setTimeout(() => {
                setLoading(false);
            }, isLaptop ? 5000 : isTablet ? 4000 : isMobile ? 3000 : 2000)
        }

        const timer = setInterval(progress, 500);
    }, []);

    const fetchData = async () => {
        setUserOauth(await JSON.parse(localStorage.getItem("myOauth")))
    }

    const toggle = () => {

        setCollapsed(!collapsed)

    }

    const onConfirm = (order) => {
        setStatus(order)
    }

    return (
        < React.Fragment>
            {
                typeof document === 'undefined' ?
                    null :
                    <React.Fragment>
                        <Head>
                            <title>Eldery Dashboard</title>
                            <link rel='icon' href='/static/logomain.svg' />
                        </Head>
                        {
                            loading ?
                                <Progress
                                    strokeColor={{
                                        from: '#108ee9',
                                        to: '#87d068',
                                    }}
                                    percent={completed}
                                    status="active"
                                />
                                :
                                userOauth != null ?
                                    <Layout>
                                        {
                                            isTablet ?
                                                <Sider trigger={null} collapsible collapsed={collapsed}>
                                                    {
                                                        collapsed ?
                                                            <div className="logo">
                                                                <Link href="/">
                                                                    <h6>Eldery DB</h6>
                                                                </Link>
                                                            </div>
                                                            :
                                                            <div className="logo">
                                                                <Link href="/">
                                                                    <h2>Eldery DB</h2>
                                                                </Link>
                                                            </div>
                                                    }

                                                    <Menu >
                                                        {
                                                            sidebar.map((item, index) => (
                                                                <Menu.Item key={index}>
                                                                    <a href={item.href}>
                                                                        {
                                                                            index == 0 ?
                                                                                <HomeOutlined />
                                                                                :
                                                                                index == 1 ?
                                                                                    <span className="anticon">
                                                                                        <FontAwesomeIcon icon={faUser} />
                                                                                    </span>
                                                                                    :
                                                                                    index == 2 ?
                                                                                        <span className="anticon">
                                                                                            <FontAwesomeIcon icon={faHeart} />
                                                                                        </span>
                                                                                        :
                                                                                        index == 3 ?
                                                                                            <span className="anticon">
                                                                                                <FontAwesomeIcon icon={faBuilding} />
                                                                                            </span>
                                                                                            :
                                                                                            index == 4 ?
                                                                                                <span className="anticon">
                                                                                                    <FontAwesomeIcon icon={faNewspaper} />
                                                                                                </span>
                                                                                                :
                                                                                                <span className="anticon">
                                                                                                    <FontAwesomeIcon icon={faBullhorn} />
                                                                                                </span>
                                                                        }
                                                                        <span>{item.name}</span>
                                                                    </a>
                                                                </Menu.Item>

                                                            ))
                                                        }
                                                    </Menu>
                                                </Sider>
                                                :
                                                null
                                        }
                                        <Layout className="site-layout">
                                            {
                                                isTablet ?
                                                    <Header className="site-layout-background">
                                                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                                            className: 'trigger',
                                                            onClick: toggle,
                                                        })

                                                        }
                                                        <nav className="layout-header-navbar">
                                                            {
                                                                navbar.map((item, index) => (
                                                                    <a key={index} href={item.href}>
                                                                        <p>{item.name}</p>
                                                                    </a>
                                                                ))
                                                            }

                                                        </nav>
                                                    </Header>
                                                    :
                                                    <NavBar tab={sidebar} confirm={onConfirm} />
                                            }

                                            <Content className="site-layout-background" >
                                                {props.children}
                                            </Content>
                                        </Layout>
                                    </Layout>
                                    :
                                    <Error />
                        }
                    </React.Fragment>
            }
        </ React.Fragment>
    );
}


export default Dashboard