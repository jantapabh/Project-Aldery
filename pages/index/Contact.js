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

    const [department, setDepartment] = useState([
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
            img: "/static/imgContact3.png",
            name: "ที่ว่าการอำเภอกะทู้",
            detail: "51/16 ถ.วิชิตสงคราม ต.กะทู้ อ.กะทู้ จ.ภูเก็ต โทร.076-321133",
            tel: "076321133",
            link: "https://www.facebook.com/tevakarnaumpor",
            map: "https://www.google.co.th/maps/place/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89+Kathu+District+Office/@7.9100774,98.3360604,16z/data=!4m8!1m2!2m1!1z4LiX4Li14LmI4Lin4LmI4Liy4LiB4Liy4Lij4Lit4Liz4LmA4Lig4Lit4LiB4Liw4LiX4Li54LmJICDguIjguLHguIfguKvguKfguLHguJTguKDguLnguYDguIHguYfguJU!3m4!1s0x3050305d2835917d:0x9a921465196e83a6!8m2!3d7.9090171!4d98.3334266?hl=th&authuser=0"
        },
    ])

    const [help, setHelp] = useState([
        {
            img: "/static/imgContact4.png",
            name: "โรงพยาบาลส่งเสริมสุขภาพตำบล ตำบลกะทู้",
            detail: "59/3 ม.4 ต.กะทู้ อ.กะทู้ จ.ภูเก็ต โทร.076-321548",
            tel: "076321548",
            map: "https://www.google.com/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89/@7.916979,98.3415863,17z/data=!3m1!4b1!4m5!3m4!1s0x30503057af5e0b47:0xb21089b5f78f4817!8m2!3d7.916979!4d98.343775"
        },
        {
            img: "/static/imgContact5.png",
            name: "โรงพยาบาลป่าตอง",
            detail: " 57 ถ.ใสน้ำเย็น ต.ป่าตอง อ.กะทู้ จ.ภูเก็ต เปิด 24 ชม. โทร.076-3426334",
            tel: "0763426334",
            map: "https://www.google.co.th/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%87/@7.896479,98.2996783,17z/data=!3m1!4b1!4m5!3m4!1s0x30503aa248747279:0xe0ff9b6f01619ceb!8m2!3d7.896479!4d98.301867?hl=th&authuser=0"
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
            {
                typeof document === 'undefined' ?
                    null :
                    <React.Fragment>
                        <Head>
                            <title>Eldery DB</title>
                            <link rel='icon' href='/static/logomain.svg' />
                        </Head>
                        <NavBar name="other" tab={isSmallScreen ? homeMin : home} confirm={onConfirm} />
                        <div className="warp-contact-page">
                            <div className="page-content">
                                {
                                    isSmallScreen ?
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h4>{header}</h4>
                                                <h5>{subHead}</h5>
                                            </div>

                                            <div className="detail-content">
                                                <div className="data-detail-content">
                                                    {
                                                        department.map((item, index) => (
                                                            <Card
                                                                style={{ width: 350, marginTop: 15 }}
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

                                                <div className="data-detail-content">
                                                    {
                                                        help.map((item, index) => (
                                                            <Card
                                                                style={{ width: 400, marginTop: 15 }}
                                                                actions={[

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
                                        :
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h3>{header}</h3>
                                                <h3>{subHead}</h3>
                                            </div>

                                            <div className="detail-content">
                                                <div className="data-detail-content">
                                                    {
                                                        department.map((item, index) => (
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

                                                <div className="data-detail-content">
                                                    {
                                                        help.map((item, index) => (
                                                            <Card
                                                                style={{ width: 400, marginTop: 15 }}
                                                                actions={[

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
            }
        </React.Fragment>
    )
}
export default Contact;