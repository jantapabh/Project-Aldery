import Link from 'next/link'
import React from 'react'

class SideBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: "หน้าหลัก", href: "/main" },
                { name: "ข้อมูลทางสถิติ", href: "/mainchart" },
                { name: "เบี้ยยังชีพผู้สูงอายุ", href: "/maincard" }
            ]
        }
    }


    render() {
        return (
                <div className="sidebar">
                    <div className="sidebar-list">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <Link href={item.href} >
                                        <h6 key={index}>{item.name}</h6>
                                    </Link>
                                )
                            })
                        }
                    </div>



                </div>
         
        )
    }
}
export default SideBar;