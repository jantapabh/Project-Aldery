import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';
import { Steps } from 'antd';
const { Step } = Steps;

const Allowance = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })
    const [header, setHeader] = useState("เบี้ยยังชีพผู้สูงอายุ")
    const [subHead, setSubHead] = useState("อำเภอกะทู้ จังหวัดภูเก็ต")

    const [data, setData] = useState([
        {
            title: "เบี้ยยังชีพผู้สูงอายุ ",
            description: "เบี้ยยังชีพผู้สูงอายุคืออะไร"
        },
        {
            title: "ใครบ้างมีสิทธิได้รับเบี้ยยังชีพผู้สูงอายุ",
            description: "สิทธิในการรับเบี้ยยังชีพผู้สูงอายุ"
        },
        {
            title: "การลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ",
            description: "สามารถลงได้ที่ไหน ต้องทำอย่างไร และรับเงินเบี้ยยังชีพผ่านทางช่องทางไหนได้บ้าง"
        },
        {
            title: "หลักฐานในการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ",
            description: " ในกรณีผู้สูงอายุมารับด้วยตนเอง หรือให้ผู้เเทนมารับ"
        },
        {
            title: "เบี้ยยังชีพที่ผู้สูงอายุจะได้รับ",
            description: "การจ่ายเบี้ยยังชัพผู้สูงอายุแบบบันไดตามช่วงอายุ"
        },
        {
            title: "การเซ็นสําเนาที่ถูกต้อง",
            description: "วิธีการเซ็นสำเนาบัตรประชาชน สำเนาทะเบียนบ้าน และสมุดบัญชีเงินฝากธนาคาร"
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

    const [current, setCurrent] = useState(0)

    const onConfirm = (order) => {
        setStatus(order)
    }

    const onChangeStep = current => {
        setCurrent(current)
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
                        <div className="warp-allowance-page">
                            <div className="page-content">
                                {
                                    isSmallScreen ?
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h4>{header}</h4>
                                                <h5>{subHead}</h5>
                                            </div>

                                            <div className="detail-content">
                                                <Steps current={current} direction="vertical" onChange={onChangeStep}>
                                                    {data.map((item, index) => (
                                                        <Step key={index} title={item.title} description={item.descriptionn} />
                                                    ))
                                                    }
                                                </Steps>
                                                {
                                                    current == 0 ?
                                                        <div className="data-detail-content">
                                                            <img src="/static/imgAllowance.png" />
                                                            <div className="title-content">
                                                                <h6 className="header-title-content">เบี้ยยังชีพผู้สูงอายุ</h6>
                                                                <div className="sub-title-content">
                                                                    <h6>คือ สวัสดิการขั้นพื้นฐานที่ภาครัฐจัดสรรไว้ให้กับผู้สูงอายุ เพื่อเป็นเงินช่วยเหลือ</h6>
                                                                    <h6> และแบ่งเบาภาระค่าใช้จ่ายการดำรงชีวิตในแต่ละเดือน</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        current == 1 ?
                                                            <div className="data-detail-content">
                                                                <div className="title-content">
                                                                    <h6 className="header-title-content">ใครบ้างมีสิทธิได้รับเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                    <h6>คุณสมบัติของผู้ที่จะได้รับเงินช่วยเหลือต้องมีเกณฑ์ ดังต่อไปนี้</h6>
                                                                    <div className="sub-title-content">
                                                                        <h6>1. มีสัญชาติไทย</h6>
                                                                        <h6>2. มีอายุ 59 ปีบริบูรณ์ขึ้นไป</h6>
                                                                        <h6>3. ต้องไม่เคยได้รับสิทธิประโยชน์จากหน่วยงานของรัฐ หรือรัฐวิสาหกิจ</h6>
                                                                    </div>
                                                                    <h6 className="header-title-content">ตัวอย่างการคำนวณอายุ</h6>
                                                                    <h6>การลงทะเบียนของปี 2560 ต้องเป็นผู้สูงอายุที่เกิดก่อนวันที่ 1 ตุลาคม 2501</h6>
                                                                    <h6>ส่วนผู้สูงอายุที่ทะเบียนราษฎรระบุเฉพาะปีเกิด </h6>
                                                                    <h6>ให้ถือว่าเกิดวันที่ 1 มกราคม ของปีนั้น ๆ</h6>
                                                                    <h6 className="header-title-content">สิทธิประโยชน์จากหน่วยงานของรัฐ หรือรัฐวิสาหกิจ</h6>
                                                                    <h6>ไม่ว่าจะเป็น เงินบำนาญ เบี้ยหวัด บำนาญพิเศษ รวมถึงเงินอื่น ๆ ในลักษณะเดียวกัน เช่น</h6>

                                                                    <h6>- ผู้สูงอายุที่อยู่ในสถานสงเคราะห์ของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น</h6>
                                                                    <h6>- ผู้ที่ได้รับเงินเดือน ค่าตอบแทน รายได้ประจำ หรือผลประโยชน์ตอบแทนอย่างอื่น</h6>
                                                                    <h6>ที่รัฐจัดให้เป็นประจำ</h6>
                                                                </div>
                                                            </div>
                                                            :
                                                            current == 2 ?
                                                                <div className="data-detail-content">
                                                                    <div className="title-content">
                                                                        <h6 className="header-title-content">การลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                        <h6>สำหรับผู้สูงอายุที่มีคุณสมบัติตามเกณฑ์ที่กำหนด</h6>
                                                                        <h6>สามารถไปลงทะเบียนรับเบี้ยยังชีพด้วยตัวเองได้ตั้งแต่วันที่ 1-30 พฤศจิกายน ของทุกปี</h6>
                                                                        <div className="sub-title-content">
                                                                            <h6>1. ผู้สูงอายุในกรุงเทพฯ ลงทะเบียน ณ สำนักงานเขตที่มีชื่ออยู่ในทะเบียนบ้าน</h6>
                                                                            <h6>2. ผู้สูงอายุต่างจังหวัดยื่นได้ที่สำนักงานเทศบาล หรือองค์การบริหารส่วนตำบล (อบต.) </h6>
                                                                            <h6 className="sub-content">ที่ผู้สูงอายุมีชื่ออยู่ในทะเบียนบ้าน</h6>
                                                                        </div>
                                                                        <h6 className="header-title-content">ช่องทางในการรับเงินเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                        <div className="sub-title-content">
                                                                            <h6>1. รับเป็นเงินสดด้วยตนเอง</h6>
                                                                            <h6>2. ให้ผู้แทนที่ได้รับมอบอำนาจรับแทน</h6>
                                                                            <h6>3. โอนเข้าบัญชีธนาคารในนามของผู้สูงอายุ</h6>
                                                                            <h6>4. โอนเข้าบัญชีธนาคารในนามของผู้แทนที่ได้รับมอบอำนาจจากผู้สูงอาย</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                current == 3 ?
                                                                    <div className="data-detail-content">
                                                                        <div className="title-content">
                                                                            <h6 className="header-title-content">หลักฐานในการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                            <div className="sub-title-content">
                                                                                <h6>1. บัตรประจำตัวประชาชนตัวจริงพร้อมสำเนา หรือบัตรอื่นที่ออก</h6>
                                                                                <h6 className="sub-content">โดยหน่วยงานของรัฐที่มีรูปถ่าย</h6>
                                                                                <h6>2. ทะเบียนบ้านตัวจริงพร้อมสำเนา</h6>
                                                                                <h6>3. สมุดบัญชีเงินฝากธนาคารตัวจริงพร้อมสำเนา สำหรับผู้ขอรับเงินผ่านธนาคาร</h6>
                                                                            </div>
                                                                            <h6 className="header-title-content">กรณีที่ผู้สูงอายุไม่สามารถมาจดทะเบียนได้ด้วยตนเอง</h6>
                                                                            <h6> สามารถมอบอำนาจเป็นลายลักษณ์อักษรให้ผู้อื่นเป็นผู้ยื่นคำขอขึ้นทะเบียนรับเงินแทนได้</h6>
                                                                            <h6>โดยผู้แทนจะต้องมีหนังสือมอบอำนาจพร้อมสำเนาบัตรประจำตัวประชาชน</h6>
                                                                            <h6>ของผู้รับมอบอำนาจมายื่นคำขอขึ้นทะเบียนด้วย</h6>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    current == 4 ?
                                                                        <div className="data-detail-content">
                                                                            <div className="title-content">
                                                                                <h6 className="header-title-content">เบี้ยยังชีพที่ผู้สูงอายุจะได้รับ</h6>
                                                                                <h6>ปัจจุบันการจ่ายเบี้ยยังชีพผู้สูงอายุ จะเป็นแบบขั้นบันไดตามช่วงอายุ</h6>
                                                                                <h6>โดยผู้สูงอายุจะได้รับเงินช่วยเหลือเป็นรายเดือนต่อเนื่องไปจนกว่าจะเสียชีวิต </h6>
                                                                                <h6>ซึ่งแบ่งได้ตามนี้</h6>
                                                                                <div className="sub-title-content">
                                                                                    <h6>- ช่วงอายุ 60 - 69 ปี ได้รับเงิน 600 บาทต่อเดือน</h6>
                                                                                    <h6>- ช่วงอายุ 70 - 79 ปี ได้รับเงิน 700 บาทต่อเดือน</h6>
                                                                                    <h6>- ช่วงอายุ 80 - 89 ปี ได้รับเงิน 800 บาทต่อเดือน</h6>
                                                                                    <h6>- ช่วงอายุ 90 ปีขึ้นไป ได้รับเงิน 1,000 บาทต่อเดือน</h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        null
                                                }
                                            </div>
                                        </div>
                                        :
                                        <div className="container-fluid">
                                            <div className="head-content">
                                                <h3>{header}</h3>
                                                <h3>{subHead}</h3>
                                            </div>
                                            <div className="detail-content">
                                                <Steps current={current} direction="vertical" onChange={onChangeStep}>
                                                    {data.map((item, index) => (
                                                        <Step key={index} title={item.title} description={item.description} />
                                                    ))
                                                    }
                                                </Steps>
                                                {
                                                    current == 0 ?
                                                        <div className="data-detail-content">
                                                            <img src="/static/imgAllowance.png" />
                                                            <div className="title-content">
                                                                <h6 className="header-title-content">เบี้ยยังชีพผู้สูงอายุ</h6>
                                                                <div className="sub-title-content">
                                                                    <h6>คือ สวัสดิการขั้นพื้นฐานที่ภาครัฐจัดสรรไว้ให้กับผู้สูงอายุ เพื่อเป็นเงินช่วยเหลือ</h6>
                                                                    <h6> และแบ่งเบาภาระค่าใช้จ่ายการดำรงชีวิตในแต่ละเดือน</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        current == 1 ?
                                                            <div className="data-detail-content">
                                                                <div className="title-content">
                                                                    <h6 className="header-title-content">ใครบ้างมีสิทธิได้รับเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                    <h6>คุณสมบัติของผู้ที่จะได้รับเงินช่วยเหลือต้องมีเกณฑ์ ดังต่อไปนี้</h6>
                                                                    <div className="sub-title-content">
                                                                        <h6>1. มีสัญชาติไทย</h6>
                                                                        <h6>2. มีอายุ 59 ปีบริบูรณ์ขึ้นไป</h6>
                                                                        <h6>3. ต้องไม่เคยได้รับสิทธิประโยชน์จากหน่วยงานของรัฐ หรือรัฐวิสาหกิจ</h6>
                                                                    </div>
                                                                    <h6 className="header-title-content">ตัวอย่างการคำนวณอายุ</h6>
                                                                    <h6>การลงทะเบียนของปี 2560 ต้องเป็นผู้สูงอายุที่เกิดก่อนวันที่ 1 ตุลาคม 2501</h6>
                                                                    <h6>ส่วนผู้สูงอายุที่ทะเบียนราษฎรระบุเฉพาะปีเกิด </h6>
                                                                    <h6>ให้ถือว่าเกิดวันที่ 1 มกราคม ของปีนั้น ๆ</h6>
                                                                    <h6 className="header-title-content">สิทธิประโยชน์จากหน่วยงานของรัฐ หรือรัฐวิสาหกิจ</h6>
                                                                    <h6>ไม่ว่าจะเป็น เงินบำนาญ เบี้ยหวัด บำนาญพิเศษ รวมถึงเงินอื่น ๆ ในลักษณะเดียวกัน เช่น</h6>

                                                                    <h6>- ผู้สูงอายุที่อยู่ในสถานสงเคราะห์ของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น</h6>
                                                                    <h6>- ผู้ที่ได้รับเงินเดือน ค่าตอบแทน รายได้ประจำ หรือผลประโยชน์ตอบแทนอย่างอื่น</h6>
                                                                    <h6>ที่รัฐจัดให้เป็นประจำ</h6>
                                                                </div>
                                                            </div>
                                                            :
                                                            current == 2 ?
                                                                <div className="data-detail-content">
                                                                    <div className="title-content">
                                                                        <h6 className="header-title-content">การลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                        <h6>สำหรับผู้สูงอายุที่มีคุณสมบัติตามเกณฑ์ที่กำหนด</h6>
                                                                        <h6>สามารถไปลงทะเบียนรับเบี้ยยังชีพด้วยตัวเองได้ตั้งแต่วันที่ 1-30 พฤศจิกายน ของทุกปี</h6>
                                                                        <div className="sub-title-content">
                                                                            <h6>1. ผู้สูงอายุในกรุงเทพฯ ลงทะเบียน ณ สำนักงานเขตที่มีชื่ออยู่ในทะเบียนบ้าน</h6>
                                                                            <h6>2. ผู้สูงอายุต่างจังหวัดยื่นได้ที่สำนักงานเทศบาล หรือองค์การบริหารส่วนตำบล (อบต.) </h6>
                                                                            <h6 className="sub-content">ที่ผู้สูงอายุมีชื่ออยู่ในทะเบียนบ้าน</h6>
                                                                        </div>
                                                                        <h6 className="header-title-content">ช่องทางในการรับเงินเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                        <div className="sub-title-content">
                                                                            <h6>1. รับเป็นเงินสดด้วยตนเอง</h6>
                                                                            <h6>2. ให้ผู้แทนที่ได้รับมอบอำนาจรับแทน</h6>
                                                                            <h6>3. โอนเข้าบัญชีธนาคารในนามของผู้สูงอายุ</h6>
                                                                            <h6>4. โอนเข้าบัญชีธนาคารในนามของผู้แทนที่ได้รับมอบอำนาจจากผู้สูงอาย</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                current == 3 ?
                                                                    <div className="data-detail-content">
                                                                        <div className="title-content">
                                                                            <h6 className="header-title-content">หลักฐานในการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                                                            <div className="sub-title-content">
                                                                                <h6>1. บัตรประจำตัวประชาชนตัวจริงพร้อมสำเนา หรือบัตรอื่นที่ออก</h6>
                                                                                <h6 className="sub-content">โดยหน่วยงานของรัฐที่มีรูปถ่าย</h6>
                                                                                <h6>2. ทะเบียนบ้านตัวจริงพร้อมสำเนา</h6>
                                                                                <h6>3. สมุดบัญชีเงินฝากธนาคารตัวจริงพร้อมสำเนา สำหรับผู้ขอรับเงินผ่านธนาคาร</h6>
                                                                            </div>
                                                                            <h6 className="header-title-content">กรณีที่ผู้สูงอายุไม่สามารถมาจดทะเบียนได้ด้วยตนเอง</h6>
                                                                            <h6> สามารถมอบอำนาจเป็นลายลักษณ์อักษรให้ผู้อื่นเป็นผู้ยื่นคำขอขึ้นทะเบียนรับเงินแทนได้</h6>
                                                                            <h6>โดยผู้แทนจะต้องมีหนังสือมอบอำนาจพร้อมสำเนาบัตรประจำตัวประชาชน</h6>
                                                                            <h6>ของผู้รับมอบอำนาจมายื่นคำขอขึ้นทะเบียนด้วย</h6>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    current == 4 ?
                                                                        <div className="data-detail-content">
                                                                            <div className="title-content">
                                                                                <h6 className="header-title-content">เบี้ยยังชีพที่ผู้สูงอายุจะได้รับ</h6>
                                                                                <h6>ปัจจุบันการจ่ายเบี้ยยังชีพผู้สูงอายุ จะเป็นแบบขั้นบันไดตามช่วงอายุ</h6>
                                                                                <h6>โดยผู้สูงอายุจะได้รับเงินช่วยเหลือเป็นรายเดือนต่อเนื่องไปจนกว่าจะเสียชีวิต </h6>
                                                                                <h6>ซึ่งแบ่งได้ตามนี้</h6>
                                                                                <div className="sub-title-content">
                                                                                    <h6>- ช่วงอายุ 60 - 69 ปี ได้รับเงิน 600 บาทต่อเดือน</h6>
                                                                                    <h6>- ช่วงอายุ 70 - 79 ปี ได้รับเงิน 700 บาทต่อเดือน</h6>
                                                                                    <h6>- ช่วงอายุ 80 - 89 ปี ได้รับเงิน 800 บาทต่อเดือน</h6>
                                                                                    <h6>- ช่วงอายุ 90 ปีขึ้นไป ได้รับเงิน 1,000 บาทต่อเดือน</h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        current == 5 ?
                                                                            <div className="data-detail-content">
                                                                                <div className="title-content">
                                                                                    <h6 className="header-title-content">การเซ็นสําเนาที่ถูกต้อง</h6>
                                                                                    <div className="sub-title-content">
                                                                                        <h6>1. ขีดเส้นคร่อมบนตัวสำเนาในส่วนที่เป็นข้อมูล</h6>
                                                                                        <h6 className="sub-content">เกี่ยวกับเจ้าของเอกสาร หรือไม่ก็ได้</h6>
                                                                                        <h6>2. ควรระบุวัตถุประสงค์ในการนำไปใช้ให้ชัดเจนว่า เอกสารฉบับนั้นใช้สำหรับทำอะไร เช่น</h6>
                                                                                        <h6 className="sub-content">“ใช้เฉพาะการสมัครงานเท่านั้น” หรือ “ใช้สำหรับติดต่อเรื่อง…เท่านั้น”</h6>
                                                                                        <h6>3. ระบุ วัน เดือน ปี ณ วันที่ยื่นเรื่อง</h6>
                                                                                        <h6>4. เขียนข้อความทั้งหมดด้วยหมึกสีดำ</h6>
                                                                                        <h6>5. ต้องเขียนข้อความทั้งหมดลงบนสำเนาส่วนที่เป็นบัตร</h6>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            null
                                                }
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </React.Fragment >
            }
        </React.Fragment>
    )
}
export default Allowance;