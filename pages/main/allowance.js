import React, {useState} from 'react'
import CardData from '../../components/layout/cardmain';
import Navbar_main from '../../components/nav_main';
import Sidebar from '../../components/layout/sidebar';
import _ from 'lodash'

const Allowance = props => {
    
    const [status,setStatus] = useState(true)
    
    const onConfirm = (order) => {
        setStatus(order)
    }

    return (
        <div className="warp-main">
            <Navbar_main confirm={onConfirm} status={status} />
            <Sidebar status={status} />
            <div className={`wrapper${status ? " menuDisplayed" : ""}`}>
                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <h1 className="text-center">การรับเบี้ยยังชีพผู้สูงอายุ</h1>
                        <h4 className="text-center">ของประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
                        <CardData />
                        <div className="data-source" >
                            <a
                                target="_blank"
                                href="https://docs.google.com/spreadsheets/d/15bzSXCpQI7qVZyW3-kCQsQ1Qg_6ssRSTa5X4aNavIp8/edit?usp=sharing">
                                <img src="/static/logo-google-sheets.svg" />
                            </a>

                            <div className="text-source">
                                <h6 >ที่มา: แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ ผู้พิการเเละผู้ป่วยในชุมชน</h6>
                                <h6>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Allowance

