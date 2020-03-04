import React, { useState } from 'react'
import Link from 'next/link'


const Sidebar = props => {

    const [sidebar, setSidebar] = useState(
        [
            { name: "รายงานความคืบหน้า", nameicon: "Dashboard", img: "/static/dashboard.svg", link: "/main/people" },
            { name: "ข้อมูลทางสถิติ", nameicon: "Chart", img: "/static/chart.svg", link: "/main/chart" },
            { name: "เบี้ยยังชีพผู้สูงอายุ", nameicon: "Allowance", img: "/static/allowance.png", link: "/main/allowance" },
            { name: "สวัสดิการจากรัฐ", nameicon: "Benefits", img: "/static/document.svg", link: "/main/doc" },
            { name: "หน่วยงาน", nameicon: "Service", img: "/static/service.svg", link: "/main/service" },
            { name: "สภาพทางสังคม", nameicon: "", img: "/static/social.svg", link: "/main/social" },
            { name: "ด้านเศรษฐกิจ", nameicon: "Economy", img: "/static/economy.svg", link: "/main/economy" },
            { name: "โรงพยาบาล", nameicon: "Hospital", img: "/static/hospital.svg", link: "/main/hospital" },
            { name: "ช่วยเหลือ", nameicon: "Help", img: "/static/help.svg", link: "/main/help" },
        ]
    )

    return (
        <div className="sidebar-wrapper">

            <div className="sidebar-nav">
                <ul>
                    {
                        sidebar.map((items, index) => {
                            return (
                                <div className="sidebar-list">
                                    <Link key={index} href={items.link}>
                                        <li ><img src={items.img} /><p>{items.name}</p></li>
                                    </Link>
                                </div>

                            )
                        })
                    }

                </ul>
            </div>

            <ul className="sidebar-nav">

            </ul>
        </div>
    )
}
export default Sidebar;