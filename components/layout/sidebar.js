import React, { useState } from 'react';
import { Drawer, Button, Radio } from 'antd';
import Link from 'next/link';


const Sidebar = props => {

    const [visible, setVisible] = useState(false)
    const [placement, setPlacement] = useState('left')

    const [sidebar, setSidebar] = useState(
        [
            { name: "ข้อมูลทั่วไป", href: "/main" },
            { name: "ข้อมูลด้านสุขภาพ", href: "/main/hospital" },
            { name: "ข้อมูลด้านสังคม", href: "/main/social" },
            { name: "ข้อมูลด้านเศรษฐกิจ", href: "/main/economy" },
            { name: "ข้อมูลด้านการช่วยเหลือ", href: "/main/service" },
        ]
    )

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Open
        </Button>
            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}
export default Sidebar;