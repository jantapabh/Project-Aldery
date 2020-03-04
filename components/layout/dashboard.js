import React, { useState } from 'react'
import NavBar from './nav'
import { useMediaQuery } from 'react-responsive'
import Sidebar from './sidebar'


const Dashboard = props => {


    const [status, setStatus] = useState(false)
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [main, setMain] = useState(
        [
            { name: "หน้าหลัก", href: "/" },
            { name: "เกี่ยวกับเรา", href: "/" },
            { name: "ข่าวสาร", href: "/" },
            { name: "ติดต่อ", href: "/index/contact" },
        ]
    )

    const [sidebar, setSidebar] = useState(
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

    const onConfirm = (order) => {
        setStatus(order)

        if (props.statusMain) {
            props.onStatusMain(false)
        }
        else {
            props.onStatusMain(true)
        }

    }

    return (
        <React.Fragment>
            <NavBar name="main" tab={isSmallScreen ? sidebar : main} confirm={onConfirm} status={status} />
            <Sidebar status={status} />
        </React.Fragment>


    )

}
export default Dashboard