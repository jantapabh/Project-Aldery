import React, { useState, useEffect } from 'react'
import NavBar from './layout/nav'
import { useMediaQuery } from 'react-responsive';


const Empty = () => {

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [home, setHome] = useState(
        [
            { name: "หน้าหลัก", href: "/" },
            { name: "เกี่ยวกับเรา", href: "/" },
            { name: "ข่าวสาร", href: "/" },
            { name: "ติดต่อ", href: "/index/contact" },
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "หน้าหลัก", href: "/" },
            { name: "เกี่ยวกับเรา", href: "" },
            { name: "ข่าวสาร", href: "" },
            { name: "ติดต่อ", href: "/index/contact" },
        ]
    )

    return (
        <div>
            <NavBar name="main" tab={isSmallScreen ? homeMin : home} />
        </div>
    )
}
export default Empty;