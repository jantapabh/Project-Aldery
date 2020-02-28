import React, { useState } from 'react'
import Link from 'next/link'
import _ from 'lodash'
import Nav_logo from '../nav_logo'
import { useMediaQuery } from 'react-responsive'



const NavBar = props => {

    const tab = props.tab
    const name = props.name
    const [status, setStatus] = useState(false)
    const isBigScreen = useMediaQuery({ minDeviceWidth: 576 })
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const collapsible = async () => {
        if (!status) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }

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

    return (
        <React.Fragment>
            {
                isBigScreen && name == "index" ?
                    <nav>
                        <ul>
                            <Nav_logo />
                            <div className="warp-manu">
                                <ul>
                                    <li>
                                        {
                                            tab.map((item, index) => {
                                                return (
                                                    <Link key={index} href={item.href}>
                                                        <p >{item.name}</p>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </nav>
                    :
                    isBigScreen && name == "main" ?
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
                                                    tab.map((item, index) => {
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
                        </div>
                        :
                        isBigScreen && name == "other" ?
                            <nav>
                                <ul>
                                    <div className="warp-manu">
                                        <Link href="/">
                                            <li>
                                                <p>ย้อนกลับ</p>
                                            </li>
                                        </Link>
                                    </div>
                                    <div className="warp-manu">
                                        <ul>
                                            <li>
                                                {
                                                    tab.map((item, index) => {
                                                        return (
                                                            <Link key={index} href={item.href}>
                                                                <p >{item.name}</p>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </nav>
                            :
                            isSmallScreen ?
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
                                                    tab.map((item, indexs) => {
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
                                :
                                null
            }
        </React.Fragment>

    )
}
export default NavBar;