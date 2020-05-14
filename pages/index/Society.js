import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';

const Society = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [data, setData] = useState([
        {
            title: "รายได้ของผู้สูงอายุ",
            amount: "",
            text: "ในปี 2560 มีผู้สูงอายุมากถึง 1 ใน 3 ของผู้สูงอายุทั้งหมด ",
            subtext: "ที่มีรายได้ต่ำกว่าเส้นความยากจน 34.30% ซึ่งเท่ากับ",
            subtext2: "การมีรายได้ 2,667 บาท/เดือน หรือ 32,004 บาท/ปี"
        },
        {
            title: "การอยู่เพียงลำพังของผู้สูงอายุ",
            amount: "มีสัดส่วนมากถึง 10%",
            text: "อาจประสบปัญหาด้านสุขภาพตามอายุ หรืออาจเจ็บป่วยด้วยโรคเรื้อรัง",
            subtext: "นอกจากนี้ยังมีปัญหาด้านสภาพแวดล้อมที่อยู่อาศัย  ",
            subtext2: "ที่ผู้สูงอายุอาจประสบอุบัติเหตุจนได้รับบาดเจ็บได้",
            subtext3: "เช่น การหกล้ม การลื่นทั้งภายในบ้าน และภายนอกบ้านตัวเอง"
        },
        {
            title: "ผู้สูงอายุในยุค Thailand 4.0 และ 5.0",
            amount: "",
            text: "รู้ เท่าทัน เข้าถึง เทคโนโลยี",
            subtext: "สามารถใช้เทคโนโลยีเพื่อสร้างรายได้ และอำนวยความสะดวก",
            subtext2: "ในการดำรงชีวิตให้กับตนเอง และครอบครัวได้"
        },
    ])

    const [header, setHeader] = useState("การรับมือสังคมสูงวัย")
    const [subHead, setSubHead] = useState("การเตรียมความพร้อมเพื่อเตรียมรับมือเข้าสู่ยุคสังคมผู้สูงอายุเป็นสิ่งสำคัญ สำหรับคนทุกช่วงวัย")
    const [status, setStatus] = useState(false)

    const [home, setHome] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "ติดต่อ", href: "/index/contact" },
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
                        <NavBar name="other" tab={home} confirm={onConfirm} />
                        <div className="warp-society-page">
                            <div className="page-content">
                                {
                                    isSmallScreen ?
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h4>{header}</h4>
                                            </div>
                                            <div className="title-society">
                                                <h6 className="">{subHead}</h6>
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
                                                                <h6>{item.subtext2}</h6>
                                                                <h6>{item.subtext3}</h6>
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
                                            </div>
                                            <div className="title-society">
                                                <h6 className="">{subHead}</h6>
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
                                                                <h6>{item.subtext2}</h6>
                                                                <h6>{item.subtext3}</h6>
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