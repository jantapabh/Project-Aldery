import React, { useState } from 'react';
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

    return (
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
                                <img src="/static/gifcover.gif" />
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
                                        <a href="/index/society">
                                            <img className="hvr-wobble-horizontal" src="/static/arrow.svg" alt="arrow-icon" />
                                        </a>
                                    </div>
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
                                <img src="/static/gifcover.gif" />
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
                                        <a href="/index/society">
                                            <img className="hvr-wobble-horizontal" src="/static/arrow.svg" alt="arrow-icon" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
export default About;