import React from 'react'
import Link from 'next/link'

class Cover extends React.Component {

    render() {
        return (
            <div className="warp-header">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="title">
                            <h1 className="animated fadeInDown delay-s">Eldery DataBase </h1>
                            <h1 className="animated fadeInDown delay-s">& Infographics</h1>
                            <div className="detail">
                                <svg >
                                    <line x1="0" y1="0" x2="0" y2="100" />
                                </svg>
                                <div className="text-content">
                                    <h6>ElderlyDB เป็นระบบฐานข้อมูลผู้สูงอายุ</h6>
                                    <h6>ซึ่งแสดงผลในรูปเเบบของกราฟในรูปแบบต่าง ๆ </h6>
                                </div>

                            </div>

                            <Link href="/main">
                                <h5>เข้าสู่ระบบ</h5>
                            </Link>
                        </div>
                        <div className="cover">
                            <img src="../../static/project2.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover
