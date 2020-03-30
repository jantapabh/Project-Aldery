import React from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'


const Cover = () => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 768.99 })

    return (
        <div className="warp-cover">
            <div className="page-content">
                {
                    isSmallScreen ?
                        <div className="container-fluid">
                            <div className="title">
                                <h1>เว็บฐานข้อมูลผู้สูงอายุ</h1>
                                <h1>และอินโฟกราฟิก</h1>
                                <div className="detail">
                                    <div className="text-content">
                                        <h6>ElderlyDB เป็นการนำข้อมูลทางสถิติเกี่ยวกับผู้สูงอายุ</h6>
                                        <h6>มาเเสดงผลในรูปของกราฟ</h6>
                                        <h6>รูปแบบต่าง ๆ</h6>
                                    </div>
                                </div>
                                <Link href="/main">
                                    <h5>เข้าสู่หน้าหลัก</h5>
                                </Link>
                            </div>
                        </div>
                        :
                        <div className="container-fluid">
                            <div className="title">
                                <h1 className="animated fadeInDown delay-s">ระบบฐานข้อมูลผู้สูงอายุ</h1>
                                <h1 className="animated fadeInDown delay-s">และอินโฟกราฟิก</h1>
                                <div className="detail">
                                    <svg className="animated zoomIn delay-1s" >
                                        <line x1="0" y1="0" x2="0" y2="100" />
                                    </svg>
                                    <div className="text-content">
                                        <h6 className="animated fadeInDown delay-1s">ElderlyDB เป็นการนำข้อมูลทางสถิติเกี่ยวกับผู้สูงอายุ</h6>
                                        <h6 className="animated fadeInDown delay-1s">มาเเสดงผลในรูปเเบบของกราฟ</h6>
                                        <h6 className="animated fadeInDown delay-1s">ในรูปแบบต่าง ๆ  </h6>
                                    </div>
                                </div>

                                <Link href="/main">
                                    <h5 className="animated zoomIn delay-1s" >เข้าสู่หน้าหลัก</h5>
                                </Link>
                            </div>
                            <div className="cover">
                                <img src="../../static/testcoverNew.png" alt="cover" />
                            </div>
                        </div>
                }

            </div>
        </div>
    )

}
export default Cover
