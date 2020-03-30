import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';

const Allowance = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [header, setHeader] = useState("เบี้ยยังชีพผู้สูงอายุ")
    const [subHead, setSubHead] = useState("เว็บฐานข้อมูลผู้สูงอายุ ภายในอำเภอกะทู้ จังหวัดภูเก็ต")

    const [data, setData] = useState([
        {
            title: "เบี้ยยังชีพผู้สูงอายุ คือ",
            text: "เป็นสวัสดิการขั้นพื้นฐานที่ภาครัฐจัดสรรไว้ให้กับผู้สูงอายุซึ่งหมายถึง บุคคลที่มีอายุ 60 ปีขึ้นไป ",
            subtext: "เพื่อเป็นเงินช่วยเหลือ และแบ่งเบาภาระค่าใช้จ่ายการดำรงชีวิตในแต่ละเดือน"
        },
        {
            title: "ระดับสมบูรณ์ (Aged society)",
            text: "สังคมที่มีประชากรอายุ 60 ปีขึ้นไป มากกว่าร้อยละ 20 ของประชากรทั้งประเทศ",
            subtext: "หรือมีประชากรอายุตั้งแต่ 65 ปี มากกว่าร้อยละ 14 ของประชากรทั้งประเทศ"
        },
        {
            title: "ระดับสูง (Super-aged society)",
            text: "สังคมที่มีประชากรอายุ 65 ปีขึ้นไปมากกว่า ร้อยละ 20 ของประชากรทั้งประเทศ",
            subtext: ""
        },
    ])

    const [status, setStatus] = useState(false)

    const [home, setHome] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" }
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" },
        ]
    )

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
            <div className="warp-allowance-page">
                <div className="page-content">
                    {
                        isSmallScreen ?
                            <div className="container-fluid">
                                <div className="head-content">
                                    <h4>{header}</h4>
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
                                    <h3> ถูกแบ่งออกเป็น 3 ระดับ</h3>
                                </div>

                                <div className="detail-content">
                                    {/* <img src="/static/trstcover2.gif" /> */}
                                    <div className="data-detail-content">
                                        {
                                            data.map((item, index) => (
                                                <div className="title-content" key={index}>
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
    )
}
export default Allowance;