import React, { useState } from 'react'
import Link from 'next/link'
import _ from 'lodash'
import Nav_logo from '../nav_logo'
import { useMediaQuery } from 'react-responsive'



const NavBar = props => {
    const tab = props.tab
    const isBigScreen = useMediaQuery({ minDeviceWidth: 576 })
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [status, setStatus] = useState(false)


    const collapsible = async () => {
        if (!status) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }

    return (
        <React.Fragment>
            {
                isBigScreen ?
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