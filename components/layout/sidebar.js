import React, { useState } from 'react'
import Link from 'next/link';

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(
        [
            { name: "รายงานความคืบหน้า", nameicon: "Dashboard", img: "/static/dashboard.svg", link: "/main/people" },
            { name: "ข้อมูลทางสถิติ", nameicon: "Chart", img: "/static/chart.svg", link: "/main/chart" },
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
            
        </div>
    )
}
export default Sidebar;