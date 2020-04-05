import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';


const Sidebar = props => {

    const status = props.status
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

    useEffect(() => {
        if (status) {
            setVisible(true)
        } else {
            setVisible(false)
        }

    }, [status])

    const onClose = () => {
        setVisible(false)
    };

    return (
        <div>
            {console.log("Visible: ", visible)}
            <Drawer
                title="เมนู"
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {
                    sidebar.map((item, index) => (
                        <a key={index} href={item.href}>
                            <p>{item.name}</p>
                        </a>

                    ))
                }
            </Drawer>
        </div>
    )
}
export default Sidebar;