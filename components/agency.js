import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const Agency = () => {

    const isTablet = useMediaQuery({ maxDeviceWidth: 1024 })

    const [card, setCard] = useState([
        {
            img: "/static/box1.jpg",
            box: "1",
            content: "ตรวจเช็คคุณสมบัติ",
        },
        {
            img: "/static/box2.jpg",
            box: "2",
            content: "จัดเตรียมเอกสารที่สำคัญ",
        },
        {
            img: "/static/box3.jpg",
            box: "3",
            content: "ยื่นคำขอลงทะเบียน",
        },
        {
            img: "/static/box4.jpg",
            box: "4",
            content: "รออนุมัติ เพื่อรับเงิน",
        },
    ])


    return (
        <div className="warp-agency">
            <div className="head-agency">
                <h3>วิธีการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h3>
                <svg>
                    <line x1="100" y1="0" x2="200" y2="0" />
                </svg>
                <h6>โดยการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุไม่จำเป็นต้องไปลงทะเบียนใหม่ทุกปี</h6>
                <h6>ลงเพียงครั้งเดียวก็ได้รับสิทธิไปตลอด <sup>*</sup>เว้นแต่กรณีที่ผู้สูงอายุย้ายที่อยู่อาศัย</h6>

            </div>

            {
                isTablet ?
                    <div className="content-agency">
                        {
                            card.map((items, index) => (
                                <div className="content-agency-card" key={index}>
                                    <div className="agency-box">
                                        <h6>{items.box}</h6>
                                    </div>
                                    <p>{items.content}</p>

                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="content-agency">
                        {
                            card.map((items, index) => (
                                <div className="content-agency-card" key={index}>
                                    <img src={items.img} alt={`box${index}`} />
                                    <div className="agency-box">
                                        <h6>{items.box}</h6>
                                    </div>
                                    <p>{items.content}</p>

                                </div>
                            ))
                        }
                    </div>
            }

        </div>
    )
}
export default Agency;