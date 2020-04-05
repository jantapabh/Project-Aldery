import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [data, setData] = useState([

        {
            title: "แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ",
            text: "",
            subtext: ""
        },
        {
            title: "1. ข้อมูลทั่วไป",
            text: "ประวัติส่วนตัว เช่น ชื่อ-นามสกุล ช่วงอายุ สัญชาติ ศาสนา การศึกษา",
            subtext: "รวมไปถึงข้อมูลด้านรายได้ รายจ่าย เเละการออม"
        },
        {
            title: "2. ข้อมูลด้านสุขภาพ",
            text: "ประวัติด้านการรักษา สภาพความพิการ โรคประจำตัว การตรวจสุภาพ ",
            subtext: "สถานพยาบาลที่ใช้ประจำ การออกกำลังกาย รวมไปถึงการสูบบุหรี่ หรือดื่มสุรา"
        },
        {
            title: "3. ข้อมูลด้านครอบครัวเเละที่อยู่อาศัย",
            text: "ข้อมูลเกี่ยวกับที่อยู่อาศัย สภาพบ้านที่อยู่อาศัย เเละจำนวนผู้อาศัยในภายครอบครัว",
            subtext: ""
        },
        {
            title: "4. ข้อมูลเกี่ยวกับภาครัฐ",
            text: "ข้อมูลเกี่ยวกับการเข้าร่วมกิจกรรมทางสังคม/เทศบาล หรือทางศาสนกิจ",
            subtext: "สภาพความเดือดร้อนในปัจจุบัน และความต้องการให้หน่วยงานของรัฐช่วยเหลือ"
        },
    ])

    const [header, setHeader] = useState("Elderly DB")
    const [subHead, setSubHead] = useState("เว็บฐานข้อมูลผู้สูงอายุ ภายในอำเภอกะทู้ จังหวัดภูเก็ต")
    const [summary, setSummary] = useState("เว็บไซต์ฐานข้อมูลผู้สูงอายุ เป็นการนำข้อมูลทางสถิติเกี่ยวกับผู้สูงอายุมาเเสดงผลในรูปของกราฟรูปแบบต่าง ๆ")

    const [status, setStatus] = useState(false)

    const [home, setHome] = useState(
        [
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" }
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
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
                        <div className="warp-about-page">
                            <div className="page-content">
                                {
                                    isSmallScreen ?
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h4>{header}</h4>
                                                <h5>{subHead}</h5>
                                            </div>

                                            <div className="detail-content">
                                                <img className="" src="/static/testcoverAbout.jpg" />
                                                <div className="data-detail-content">
                                                    {
                                                        data.map((item, index) => (
                                                            <div className="title-content " key={index}>
                                                                <h6 className="header-title-content">{item.title}</h6>
                                                                <h6 className="sub-title-content">{item.text}</h6>
                                                                <h6 className="sub-title-content">{item.subtext}</h6>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h1 className="name-header">{header}</h1>
                                                <h4 className="">{subHead}</h4>
                                                <div className="title-about">
                                                    <h6 className="">{summary}</h6>
                                                </div>
                                            </div>

                                            <div className="detail-content">
                                                <img className="" src="/static/testcoverAbout.jpg" />
                                                <div className="data-detail-content">
                                                    {
                                                        data.map((item, index) => (
                                                            <div className="title-content " key={index}>
                                                                <h6 className="header-title-content">{item.title}</h6>
                                                                <h6 className="sub-title-content">{item.text}</h6>
                                                                <h6 className="sub-title-content">{item.subtext}</h6>
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
export default About;