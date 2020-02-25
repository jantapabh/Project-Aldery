import React, { useState } from 'react'
import Nav_logo from './nav_logo';
import Link from 'next/link'



const Navbar_main = props => {

    const [status, setStatus] = useState(false)
    const [index, setIndex] = useState(
        [
            { name: "Services", href: "/index/services" },
            { name: "Contact", href: "/index/contact" },
        ]
    )

    const [main, setMain] = useState(
        [
            { name: "รายงานความคืบหน้า", href: "/main/people" },
            { name: "ข้อมูลทางสถิติ", href: "/main/chart" },
            { name: "เบี้ยยังชีพผู้สูงอายุ", href: "/main/allowance" },
            { name: "สวัสดิการจากรัฐ", href: "/main/doc" },
            { name: "การบริการ", href: "/main/service" },
            { name: "สภาพทางสังคม", href: "/main/social" },
            { name: "ด้านเศรษฐกิจ", href: "/main/economy" },
            { name: "โรงพยาบาล", href: "/main/hospital" },
            { name: "ช่วยเหลือ", href: "/main/help" }
        ]
    )

    const onConfirmClick = () => {

        if (props.status) {
            if (props.confirm) {
                props.confirm(false)
            }
        }
        else {
            if (props.confirm) {
                props.confirm(true)
            }
        }
    }

    const collapsible = async () => {
        if (!status) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }
    return (
        <div className={`wrapper${props.status ? " menuDisplayed" : ""}`}>
            <nav className="nav-other">
                <ul>
                    <div className="warp-nav-sidebar">
                        <li>
                            <div className="box-hamberger">
                                <a className={`hamberger btn${props.status ? " active" : " not-active"}`} onClick={onConfirmClick} >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </li>
                    </div>
                    <div className="warp-logo-main">
                        <ul>
                            <Link href="/">
                                <img src="/static/logomain.svg" />
                            </Link>

                        </ul>

                    </div>
                    <div className="warp-manu">
                        <ul>
                            <li>
                                {
                                    index.map((item, index) => {
                                        return (
                                            <Link key={index} href={item.href}>
                                                <p>{item.name}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                </ul>
            </nav>

            <div className="collapsible-menu">
                <div className="warp-nav-sidebar">
                    <Nav_logo />
                    <div className="box-hamberger">
                        <a className={`hamberger btn${status ? " active" : " not-active"}`} onClick={collapsible} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className={`menu-content${status ? " show" : ""}`}>
                    <ul>
                        <li >
                            {
                                main.map((item, indexs) => {
                                    return (
                                        <Link key={indexs} href={item.href}>
                                            <p >{item.name}</p>
                                        </Link>
                                    )
                                })
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar_main;