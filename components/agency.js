import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Steps } from 'antd';
const { Step } = Steps;

const Agency = () => {

    const isTablet = useMediaQuery({ maxDeviceWidth: 1025 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [card, setCard] = useState([
        {
            img: "/static/box1.jpg",
            box: "1",
            content: "ตรวจเช็คคุณสมบัติ",
            description: "สัญชาติไทย อายุ 59 ปีบริบูรณ์ เเละไม่เป็นผู้ได้รับสิทธิประโยชน์จากหน่วยงานรัฐ หรือวิสาหกิจ",
        },
        {
            img: "/static/box2.jpg",
            box: "2",
            content: "เตรียมเอกสาร",
            description: "บัตรประชาชน ทะเบียนบ้าน สมุดบัญชีเงินฝาก",
        },
        {
            img: "/static/box3.jpg",
            box: "3",
            content: "ยื่นคำขอลงทะเบียน",
            description: "ที่สำนักงานเขต หรือเทศบาล ที่มีชื่ออยู่ในทะเบียนบ้าน",
        },
        {
            img: "/static/box4.jpg",
            box: "4",
            content: "รออนุมัติ เพื่อรับเงิน",
            description: `รับเป็นเงินสดหรือโอนเข้าบัญชีธนาคารด้วยตนเองหรือโดยผู้เเเทน`
        },
    ])

    return (
        <div className="warp-agency">
            {
                isSmallScreen ?
                    <React.Fragment>
                        <div className="head-agency">
                            <h3>วิธีการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h3>
                            <div className="title-agency">
                                <h6>โดยการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                <h6>ไม่จำเป็นต้องไปลงทะเบียนใหม่ทุกปี ลงเพียงครั้งเดียวก็ได้รับสิทธิไปตลอด</h6>
                                <h6><sup>*</sup>เว้นแต่กรณีที่ผู้สูงอายุย้ายที่อยู่อาศัย</h6>
                            </div>
                        </div>
                        <div className="content-agency-mobile">
                            <Steps progressDot current={3} direction="vertical">
                                {
                                    card.map((items, index) => (
                                        <Step key={index} title={items.content} description={items.description} />
                                    ))
                                }
                            </Steps>
                        </div>
                    </React.Fragment>
                    :
                    isMobile || isTablet ?
                        <React.Fragment>
                            <div className="head-agency">
                                <h3>วิธีการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h3>
                                <div className="title-agency">
                                    <h6>โดยการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                    <h6>ไม่จำเป็นต้องไปลงทะเบียนใหม่ทุกปี ลงเพียงครั้งเดียวก็ได้รับสิทธิไปตลอด</h6>
                                    <h6><sup>*</sup>เว้นแต่กรณีที่ผู้สูงอายุย้ายที่อยู่อาศัย</h6>
                                </div>
                            </div>
                            <div className="content-agency-mobile">
                                <Steps progressDot current={3} direction="vertical">
                                    {
                                        card.map((items, index) => (
                                            <Step key={index} title={items.content} description={items.description} />
                                        ))
                                    }
                                </Steps>
                                <img src="/static/agency.jpg" alt="img-agency" />
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="head-agency">
                                <h3>วิธีการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h3>
                                <svg>
                                    <line x1="100" y1="0" x2="200" y2="0" />
                                </svg>
                                <div className="title-agency">
                                    <h6>โดยการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                    <h6>ไม่จำเป็นต้องไปลงทะเบียนใหม่ทุกปี ลงเพียงครั้งเดียวก็ได้รับสิทธิไปตลอด</h6>
                                    <h6><sup>*</sup>เว้นแต่กรณีที่ผู้สูงอายุย้ายที่อยู่อาศัย</h6>
                                </div>
                            </div>
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
                        </React.Fragment>

            }

        </div>
    )
}
export default Agency;