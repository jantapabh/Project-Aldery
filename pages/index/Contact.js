import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Skeleton, Card, Avatar, message, Tooltip } from 'antd';
import { FacebookFilled, EnvironmentFilled, CopyFilled, EllipsisOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Contact = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [header, setHeader] = useState("การติดต่อหน่วยงาน")
    const [subHead, setSubHead] = useState("อำเภอกะทู้ จังหวัดภูเก็ต")

    const [data, setData] = useState([
        {
            img: "/static/imgContact1.png",
            name: "สำนักงานเทศบาลเมืองกะทู้",
            detail: "12 ม.2 ถ.วิชิตสงคราม ต.กะทู้ อ.กะทู้ จ.ภูเก็ต โทร.076-321500",
            tel: "076321500",
            link: "https://www.facebook.com/kathu.municipality",
            map: "https://www.google.com/maps/place/%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89/@7.9111378,98.3452833,17z/data=!3m1!4b1!4m5!3m4!1s0x3050305d21d9042d:0x24ca59f8b15d6fde!8m2!3d7.9111378!4d98.347472"
        },
        {
            img: "/static/imgContact2.png",
            name: "สถานีตำรวจภูธรกะทู้",
            detail: "51/22 ม.6 ถ.วิชิตสงคราม ต.กะทู้ อ.กะทู้ จ.ภูเก็ต โทร.076-323300",
            tel: "076323300",
            link: "https://www.facebook.com/Kathu.Phuket.Police",
            map: "https://www.google.com/maps/place/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%95%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%A0%E0%B8%B9%E0%B8%98%E0%B8%A3%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89/@7.9084711,98.3305519,17z/data=!3m1!4b1!4m5!3m4!1s0x30503042d20d8c13:0x53b56df584a63ddb!8m2!3d7.9084711!4d98.3327406"
        },
        {
            img: "",
            name: "",
            detail: "",
            tel: "",
            link: "",
            map: ""
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
        message.success('คัดลอกสำเร็จ');
    }

    const text = <span>prompt text</span>;

    const buttonWidth = 70;

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

                                                        <Tooltip placement="bottom" title="เฟซบุ๊ก">
                                                            <a href={item.link} target="_blank">
                                                                <FacebookFilled key="fb" />
                                                            </a>
                                                        </Tooltip>,
                                                        <Tooltip placement="bottom" title="แผนที่">
                                                            <a href={item.map} target="_blank">
                                                                <EnvironmentFilled />
                                                            </a>
                                                        </Tooltip>,

                                                        <Tooltip placement="bottom" title="คัดลอกเบอร์โทร">
                                                            <CopyToClipboard text={item.tel} >
                                                                <CopyFilled key="Copy" onClick={success} />
                                                            </CopyToClipboard>
                                                        </Tooltip>,

                                                    ]}
                                                >
                                                    <Skeleton loading={loading} avatar active >
                                                        <Meta
                                                            avatar={
                                                                <Avatar src={item.img} />
                                                            }
                                                            title={item.name}
                                                            subTitle={item.detail}
                                                            description={item.detail}
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