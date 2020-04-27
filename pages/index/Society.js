import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';

const Society = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [data, setData] = useState([
        {
            title: "ศูนย์การเรียนรู้สำหรับผู้สูงอายุ",
            amount: "มีทั้งหมด 14 เเห่ง",
            text: "การเรียนรู้ เพื่อการพัฒนาศักยภาพผู้สูงอายุ",
            subtext: "ไม่ว่าจะเป็นตัวผู้สูงอายุเอง หรือผู้ที่อาศัยอยู่กับผู้สูงอายุ"
        },
        {
            title: "สถานพยาบาล",
            amount: "มีทั้งหมด 7 เเห่ง",
            text: "โดยเป็นสถานพยาบาลที่มีช่องทางพิเศษบริการผู้สูงอายุ",
            subtext: "ทำให้สามารถเข้าถึงการบริการสุขภาพได้สะดวก รวดเร็ว"
        },
        {
            title: "กิจกรรมสำหรับผู้สูงอายุในด้านต่างๆ",
            amount: "",
            text: "เช่น ด้านฝึกอาชีพ สุขภาพ นันทนาการ เป็นต้น",
            subtext: ""
        },
    ])

    const [header, setHeader] = useState("การจัดการเกี่ยวกับสังคมผู้สูงอายุ")
    const [subHead, setSubHead] = useState("ภายในอำเภอกะทู้ จังหวัดภูเก็ต")

    const [status, setStatus] = useState(false)

    const [home, setHome] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" }
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" },
        ]
    )

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
                        <div className="warp-society-page">
                            <div className="page-content">
                                {
                                    isSmallScreen ?
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h4>{header}</h4>
                                                <h5>{subHead}</h5>
                                            </div>

                                            <div className="detail-content">
                                                <img src="/static/gifcover2.gif" />
                                                <div className="data-detail-content">
                                                    {
                                                        data.map((item, index) => (
                                                            <div className="title-content" key={index}>
                                                                <div className="header-title-content">
                                                                    <h6 >{item.title}</h6>
                                                                </div>
                                                                <h5>{item.amount}</h5>
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
                                                <img src="/static/gifcover2.gif" />
                                                <div className="data-detail-content">
                                                    {
                                                        data.map((item, index) => (
                                                            <div className="title-content" key={index}>
                                                                <div className="header-title-content">
                                                                    <h6 >{item.title}</h6>
                                                                    <h5>{item.amount}</h5>
                                                                </div>
                                                                <h6>{item.text}</h6>
                                                                <h6>{item.subtext}</h6>
                                                            </div>
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
export default Society;