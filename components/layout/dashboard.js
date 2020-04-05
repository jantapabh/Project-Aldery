import React, { useState } from 'react'
import NavBar from './nav'
import { useMediaQuery } from 'react-responsive'
import Sidebar from './sidebar'


const Dashboard = props => {

    const [status, setStatus] = useState(false)
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [main, setMain] = useState(
        [
            { name: "เมนู" },
            // { name: "ข้อมูลด้านสุขภาพ", href: "/main/hospital" },
            // { name: "ข้อมูลด้านสังคม", href: "/main/social" },
            // { name: "ข้อมูลด้านเศรษฐกิจ", href: "/main/economy" },
            // { name: "ข้อมูลด้านการช่วยเหลือ", href: "/main/service" },

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

    const onConfirm = (order) => {
        setStatus(order)

        if (props.statusMain) {
            props.onStatusMain(false)
        }
        else {
            props.onStatusMain(true)
        }
        console.log(order);
    }

    return (
        <React.Fragment>
            <NavBar name="main" tab={isSmallScreen ? sidebar : main} confirm={onConfirm} status={status} />
            {/* <Sidebar  status={status} /> */}
        </React.Fragment>
    )
}
export default Dashboard