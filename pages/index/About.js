import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [data, setData] = useState([
        {
            title: "ระดับเริ่มต้น (Aging society)",
            text: "สังคมที่มีประชากรอายุ 60 ปีขึ้นไปมากกว่าร้อยละ 10 ของประชากรทั้งประเทศ",
            subtext: "หรือมีประชากรอายุตั้งแต่ 65 ปีมากกว่าร้อยละ 7 ของประชากรทั้งประเทศ"
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
            { name: "ข่าวสาร", href: "#" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" }
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "ข่าวสาร", href: "#" },
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
            <div className="warp-about">
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
                                    <h3>สังคมผู้สูงอายุ และระดับของการเข้าสู่สังคมผู้สูงอายุ</h3>
                                    <h3> ถูกแบ่งออกเป็น 3 ระดับ</h3>
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
                                        <div className="more-content">
                                            <h6>อ่านต่อ</h6>
                                            <img className="hvr-wobble-horizontal" src="/static/arrow.svg" alt="arrow-icon" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                    }

                </div>
            </div>
        </React.Fragment>

    )
}
export default About;