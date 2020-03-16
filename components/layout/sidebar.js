import React, { useState } from 'react'
import Link from 'next/link';

const Sidebar = props => {

    const status = props.status

    const [sidebar, setSidebar] = useState(
        [
            { name: "ข้อมูลทางสถิติ", nameicon: "Chart", img: "/static/chart.svg", link: "/main" },
            { name: "สวัสดิการ และการช่วยเหลือ", nameicon: "Benefits", img: "/static/document.svg", link: "/main/service" },
            { name: "สภาพทางสังคม", nameicon: "", img: "/static/social.svg", link: "/main/social" },
            { name: "ด้านเศรษฐกิจ", nameicon: "Economy", img: "/static/economy.svg", link: "/main/economy" },
            { name: "โรงพยาบาล", nameicon: "Hospital", img: "/static/hospital.svg", link: "/main/hospital" },
        ]
    )

    return (
        <div className={`sidebar-wrapper-${status ? "active" : "non-active"}`}>
            <div className="content-sidebar">
                <ul>
                    {
                        sidebar.map((items, index) => (
                            <li key={index}>
                                <Link href={items.link} >
                                    <p>{items.name}</p>
                                </Link>
                            </li>


                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
export default Sidebar;