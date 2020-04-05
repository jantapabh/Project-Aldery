import React, { useState, useEffect } from 'react'
import NavBar from './layout/nav'
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';


const Empty = () => {

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [home, setHome] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/" },
            { name: "ข่าวสาร", href: "/" },
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "" },
            { name: "ข่าวสาร", href: "" },
        ]
    )

    return (
        <div className="warp-empty">
            <NavBar name="empty" tab={isSmallScreen ? homeMin : home} />
            <div className="content-empty">
                <img src="/static/empty.jpg" alt="empty" />
                <div className="title-empty">
                    <h4>หน้ายังไม่พร้อมใช้งาน โปรดกลับสู่หน้าหลัก</h4>
                </div>
            </div>
            <Link href="/">
                <h5>หน้าหลัก</h5>
            </Link>
        </div>
    )
}
export default Empty;