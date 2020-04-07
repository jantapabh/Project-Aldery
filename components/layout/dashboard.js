import React, { useState } from 'react'
import NavBar from './nav'
import { useMediaQuery } from 'react-responsive'
import Sidebar from './sidebar'

const Dashboard = () => {

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 1023 })

    const [main, setMain] = useState(
        [
            { name: "เมนู" },
        ]
    )

    const [sidebar, setSidebar] = useState(
        [
            { name: "ข้อมูลทั่วไป", href: "/main" },
            { name: "ข้อมูลด้านสุขภาพ", href: "/main/hospital" },
            { name: "ข้อมูลด้านสังคม", href: "/main/social" },
            { name: "ข้อมูลด้านเศรษฐกิจ", href: "/main/economy" },
            { name: "ข้อมูลด้านการช่วยเหลือ", href: "/main/service" },
        ]
    )

    const [min, setMin] = useState(
        [
            { name: "ข้อมูลทั่วไป", href: "/main" },
            { name: "ข้อมูลด้านสุขภาพ", href: "/main/hospital" },
            { name: "ข้อมูลด้านสังคม", href: "/main/social" },
            { name: "ข้อมูลด้านเศรษฐกิจ", href: "/main/economy" },
            { name: "ข้อมูลด้านการช่วยเหลือ", href: "/main/service" },
        ]
    )

    return (
        <React.Fragment>
            <NavBar name="main" tab={isSmallScreen ? min : main} sidebar={sidebar} />
        </React.Fragment>
    )
}
export default Dashboard