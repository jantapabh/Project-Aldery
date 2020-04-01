import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Sheetapi from '../config/api';
import moment from 'moment';

moment.locale("th")
moment().format('LL');

const Info = () => {

    const isTablet = useMediaQuery({ maxDeviceWidth: 1024 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [data, setData] = useState([
        {
            title: "เพศชาย",
            number: 0,
            color: "primary"
        },
        {
            title: "เพศหญิง",
            number: 0,
            color: "primary"
        },
        {
            title: "รวม",
            number: 0,
            color: "primary"
        }
    ])
    const [color, setColor] = useState(["primary", "warning", "danger"])

    useEffect(() => {
        fetchData()
    }, [data])

    const fetchData = async () => {
        window.localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await dataList(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B10:D10')
    }

    const dataList = async (token) => {
        try {
            var gender = await Sheetapi.getSheet(token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B9:D9')
            var number = await Sheetapi.getSheet(token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B10:D10')
            for (let i = 0; i <= 2; i++) {
                var value = await {
                    title: gender[0][i],
                    number: parseInt(number[0][i]),
                    color: color[i]
                }
                var newData = [...newData, value]
            }
            newData.shift()
            setData(newData)

        } catch (err) {
            console.log(err);
        }
    }



    return (
        <React.Fragment>
            {
                isSmallScreen ?
                    <div className="warp-info">
                        <div className="page-content">
                            <div className="container-data">
                                <div className="content-data">
                                    <div className="other-data">
                                        <div className="title-other-data">
                                            <img src="/static/logomain.svg" alt="icon" />
                                            <h5>ข้อมูลผู้สูงอายุ</h5>
                                        </div>

                                        <p>วันที่ {moment().add(543, 'year').format('LL')}</p>
                                        <h6>ที่มา: แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ </h6>
                                        <h6>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</h6>
                                    </div>
                                    <div className="main-data">
                                        {
                                            data ? data.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    <div className="card-data" >
                                                        <div className="title">
                                                            <h5>{item.title}</h5>

                                                            <p>{item.number} คน</p>
                                                        </div>
                                                        <div className="progress">
                                                            <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                                role="progressbar"
                                                                style={{ width: item.number }}
                                                                aria-valuenow={item.number}
                                                                aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            ))
                                                :
                                                <div className="card-data">
                                                    <div className="title">
                                                        <h5>{item.title}</h5>

                                                        <p>{item.number} คน</p>
                                                    </div>
                                                    <div className="progress">
                                                        <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                            role="progressbar"
                                                            style={{ width: item.number }}
                                                            aria-valuenow={item.number}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="content-data-agency">
                                <div className="main-agency-row-mobile">
                                    <div className="title-main-agency">
                                        <h6>ตรวจสอบเบี้ยยังชีพผู้สูงอายุ</h6>
                                    </div>
                                    <div className="detail-main-agency">
                                        <a href="http://kathucity.go.th/public/allowance/data/index/menu/194">
                                            <p className="p-click">โปรดคลิกที่นี่</p>
                                        </a>
                                        <p>คำเเนะนำ:<br /> โปรดเตรียมบัตรประชาชนของท่าน <br />เพื่อใช้ในการตรวจสอบข้อมูล</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    isTablet || isMobile ?
                        <div className="warp-info">
                            <div className="page-content">
                                <div className="content-data-agency">
                                    <div className="head-agency">
                                        <img src="/static/imgContact1.png" alt="logo" />
                                        <div className="title-agency">
                                            <h2>เทศบาลเมืองกะทู้</h2>
                                            <h6>จังหวัดภูเก็ต</h6>
                                        </div>
                                    </div>
                                    <div className="main-agency-row-mobile">
                                        <div className="title-main-agency">
                                            <h6>ตรวจสอบเบี้ยยังชีพผู้สูงอายุ</h6>
                                        </div>
                                        <div className="detail-main-agency">
                                            <a href="http://kathucity.go.th/public/allowance/data/index/menu/194">
                                                <p className="p-click">โปรดคลิกที่นี่</p>
                                            </a>
                                            <p>คำเเนะนำ:<br /> โปรดเตรียมบัตรประชาชนของท่าน <br />เพื่อใช้ในการตรวจสอบข้อมูล</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-data">
                                    <div className="title-data">
                                        <h6>จำนวนผู้สูงอายุ</h6>
                                    </div>
                                    <div className="content-data">
                                        <div className="main-data">
                                            {
                                                data ? data.map((item, index) => (
                                                    <React.Fragment key={index}>
                                                        <div className="card-data" >
                                                            <div className="title">
                                                                <h5>{item.title}</h5>

                                                                <p>{item.number} คน</p>
                                                            </div>
                                                            <div className="progress">
                                                                <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                                    role="progressbar"
                                                                    style={{ width: item.number }}
                                                                    aria-valuenow={item.number}
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                ))
                                                    :
                                                    <div className="card-data">
                                                        <div className="title">
                                                            <h5>{item.title}</h5>

                                                            <p>{item.number} คน</p>
                                                        </div>
                                                        <div className="progress">
                                                            <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                                role="progressbar"
                                                                style={{ width: item.number }}
                                                                aria-valuenow={item.number}
                                                                aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>

                                        <div className="other-data">
                                            <div className="title-other-data">
                                                <img src="/static/logomain.svg" alt="icon" />
                                                <h5>ข้อมูลผู้สูงอายุ</h5>
                                            </div>

                                            <p>วันที่ {moment().add(543, 'year').format('LL')}</p>
                                            <h6>ที่มา: แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ </h6>
                                            <h6>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :

                        <div className="warp-info">
                            <div className="page-content">
                                <div className="content-data-agency">
                                    <div className="head-agency">
                                        <img src="/static/imgContact1.png" alt="logo" />
                                        <div className="title-agency">
                                            <h2>เทศบาลเมืองกะทู้</h2>
                                            <h6>จังหวัดภูเก็ต</h6>
                                        </div>

                                    </div>
                                    <div className="main-agency">
                                        <div className="main-agency-row">
                                            <div className="title-main-agency">
                                                <h6>กองสวัสดิการสังคม</h6>
                                            </div>
                                            <div className="detail-main-agency">
                                                <h6>วิสัยทัศน์</h6>
                                                <p>"มุ่งเน้นพัฒนาองค์ความรู้ <br />เสริมสร้างการมีส่วนร่วม
                            ลดปัญหาผู้ด้อยโอกาส<br /> พัฒนาความเข้มแข็งของชุมชนอย่างยั่งยืน"</p>
                                                <h6>หน้าที่</h6>
                                                <p>1. ฝ่ายสังคมสงเคราะห์<br />2. ฝ่ายพัฒนาชุมชน <br />3. งานธุรการ</p>

                                            </div>
                                        </div>
                                        <div className="main-agency-row">
                                            <div className="title-main-agency">
                                                <h6>ตรวจสอบเบี้ยยังชีพผู้สูงอายุ</h6>
                                            </div>
                                            <div className="detail-main-agency">
                                                <a href="http://kathucity.go.th/public/allowance/data/index/menu/194">
                                                    <p className="p-click">โปรดคลิกที่นี่</p>
                                                </a>
                                                <p>คำเเนะนำ: โปรดเตรียมบัตรประชาชนของท่าน เพื่อใช้<br />ในการตรวจสอบข้อมูล</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-data">
                                    <div className="title-data">
                                        <h6>จำนวนผู้สูงอายุ</h6>
                                    </div>
                                    <div className="content-data">
                                        <div className="main-data">
                                            {
                                                data ? data.map((item, index) => (
                                                    <React.Fragment key={index}>
                                                        <div className="card-data" >
                                                            <div className="title">
                                                                <h5>{item.title}</h5>

                                                                <p>{item.number} คน</p>
                                                            </div>
                                                            <div className="progress">
                                                                <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                                    role="progressbar"
                                                                    style={{ width: item.number }}
                                                                    aria-valuenow={item.number}
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                ))
                                                    :
                                                    <div className="card-data">
                                                        <div className="title">
                                                            <h5>{item.title}</h5>

                                                            <p>{item.number} คน</p>
                                                        </div>
                                                        <div className="progress">
                                                            <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                                role="progressbar"
                                                                style={{ width: item.number }}
                                                                aria-valuenow={item.number}
                                                                aria-valuemin="0"
                                                                aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>

                                        <div className="other-data">
                                            <div className="title-other-data">
                                                <img src="/static/logomain.svg" alt="icon" />
                                                <h5>ข้อมูลผู้สูงอายุ</h5>
                                            </div>

                                            <p>วันที่ {moment().add(543, 'year').format('LL')}</p>
                                            <h6>ที่มา: แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ </h6>
                                            <h6>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            }
        </React.Fragment>
    )
}
export default Info