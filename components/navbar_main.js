import React from 'react'
import Link from 'next/link'

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [{ name: "หน้าหลัก", link: "/" },
            { name: "ข้อมูลทางสถิติ", link: "/mainchart" },
            { name: "สวัสดิการจากรัฐ", link: "/maindoc" },
            { name: "การบริการ", link: "/service" },
            { name: "โรงพยาบาล", link: "/hospital" },
            { name: "ช่วยเหลือ", link: "/help" },
            ],
            status: true
        }
    }

    render() {

        return (
            <div className="nav-bar-main">
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Link href={item.link}>
                                    <li key={index}>
                                        <p>{item.name}</p>
                                    </li>
                                </Link>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}
export default Navbar;