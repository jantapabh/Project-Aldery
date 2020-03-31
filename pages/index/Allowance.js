import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/layout/nav';
import { useMediaQuery } from 'react-responsive';
import { Steps, Divider } from 'antd';
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
            title: "กฎหมายผู้สูงอายุฉบับใหม่ให้สิทธิอะไรเพิ่มขึ้นบ้าง",
            description: "กฎหมายผู้สูงอายุ ฉบับใหม่"
        },
        {
            title: "การจัดสรรเงินช่วยเหลือ",
            description: "หลักเกณฑ์ วิธีการ และเงื่อนไขในการจัดสรรเงินช่วยเหลือ"
        }
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
        console.log('onChange:', current);
        setCurrent(current)
    };

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
                                    <h5>{subHead}</h5>
                                </div>

                                <div className="detail-content">
                                    <Steps current={current} direction="vertical" onChange={onChangeStep}>
                                        {data.map((item, index) => (
                                            <Step key={index} title={item.title}  description={item.descriptionn} />
                                        ))
                                        }
                                    </Steps>
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
                                            <img src="/static/cover-img.png" alt="current" />
                                            :
                                            null

                                    }

                                    {/* <div className="data-detail-content">
                                        {
                                            data.map((item, index) => (
                                                <div className="title-content" key={index}>
                                                    <h6 className="header-title-content">{item.title}</h6>
                                                    <div className="sub-title-content">
                                                        <h6 >{item.text}</h6>
                                                        <h6 >{item.subtext}</h6>
                                                        <h6 >{item.subtext2}</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div> */}
                                </div>
                            </div>
                    }
                </div>
            </div>
        </React.Fragment >
    )
}
export default Allowance;