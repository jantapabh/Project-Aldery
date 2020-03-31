import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Skeleton, Card, Avatar, message, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, HomeOutlined, CopyOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Contact = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [header, setHeader] = useState("การติดต่อหน่วยงาน")
    const [subHead, setSubHead] = useState("อำเภอกะทู้ จังหวัดภูเก็ต")

    const [data, setData] = useState([
        {
            name: "",
            detail: "",
            tel: ""
        },
        {
            name: "",
            detail: "",
            tel: ""
        },
        {
            name: "",
            detail: "",
            tel: ""
        },
    ])

    const [status, setStatus] = useState(false)

    const [home, setHome] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" }
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" },
        ]
    )

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    const success = () => {
        message.success('This is a success message');
    }

    const onConfirm = (order) => {
        setStatus(order)
    }

    return (
        <React.Fragment>
            <Head>
                <title>Eldery DB</title>
                <link rel='icon' href='/static/logomain.svg' />
            </Head>
            <NavBar name="main" tab={isSmallScreen ? homeMin : home} confirm={onConfirm} />
            <div className="warp-contact-page">
                <div className="page-content">
                    {
                        isSmallScreen ?
                            <div className="container-fluid">
                                <div className="head-content">
                                    <h4>สังคมผู้สูงอายุ <br />และระดับของการเข้าสู่สังคมผู้สูงอายุ</h4>
                                    <h5> ถูกแบ่งออกเป็น 3 ระดับ</h5>
                                </div>

                                <div className="detail-content">
                                    <img src="/static/trstcover2.gif" />
                                    <div className="data-detail-content">
                                        {
                                            data.map((item, index) => (
                                                <div className="title-content" key={index}>
                                                    <h6 className="header-title-content">{item.title}</h6>
                                                    <h6>{item.text}</h6>
                                                    <h6>{item.subtext}</h6>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="container-fluid">
                                <div className="head-content">
                                    <h3>{header}</h3>
                                    <h3>{subHead}</h3>
                                </div>

                                <div className="detail-content">
                                    <div className="data-detail-content">
                                        {
                                            data.map((item, index) => (
                                                <Card
                                                    style={{ width: 300, marginTop: 15 }}
                                                    actions={[
                                                        <a href="https://www.google.com/">
                                                            <HomeOutlined key="home" />
                                                        </a>,
                                                        <CopyToClipboard text={"Copy"} >
                                                            <CopyOutlined key="Copy" onClick={success} />
                                                        </CopyToClipboard>,
                                                        <EllipsisOutlined key="ellipsis" />,

                                                    ]}
                                                >
                                                    <Skeleton loading={loading} avatar active>
                                                        <Meta
                                                            avatar={
                                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                            }
                                                            title="Card title"
                                                            description="This is the description"
                                                        />
                                                    </Skeleton>
                                                </Card>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
export default Contact;