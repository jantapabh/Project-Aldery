import React from 'react'
import Link from 'next/link'

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: "หน้าหลัก", nameicon: "Home", img: "/static/home.svg", link: "/" },
                { name: "รายงานความคืบหน้า", nameicon: "Dashboard", img: "/static/dashboard.svg", link: "/main" },
                { name: "ข้อมูลทางสถิติ", nameicon: "Chart", img: "/static/chart.svg", link: "/main/chart" },
                { name: "สวัสดิการจากรัฐ", nameicon: "Benefits", img: "/static/document.svg", link: "/main/doc" },
                { name: "หน่วยงาน", nameicon: "Service", img: "/static/service.svg", link: "/main/service" },
                { name: "สภาพทางสังคม", nameicon: "", img: "/static/social.svg", link: "/main/social" },
                { name: "ด้านเศรษฐกิจ", nameicon: "Economy", img: "/static/economy.svg", link: "/main/economy" },
                { name: "โรงพยาบาล", nameicon: "Hospital", img: "/static/hospital.svg", link: "/main/hospital" },
                { name: "ช่วยเหลือ", nameicon: "Help", img: "/static/help.svg", link: "/main/help" },
            ],
        }
    }

    render() {
        return (
            <div className={`wrapper${this.props.status ? " menuDisplayed" : ""}`}>
                <div className="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {
                            this.state.list.map((items, index) => {
                                return (
                                    <React.Fragment>
                                        <Link href={items.link}>
                                            <li key={index}><img src={items.img} /><a>{items.name}</a></li>
                                        </Link>
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>

                    <ul className="non-sidebar-nav">
                        {
                            this.state.list.map((itemss, indexs) => {
                                return (
                                    <React.Fragment>
                                        <div className="icon-sidebar">
                                            <li key={indexs}><img src={itemss.img} /></li>
                                            <p>{itemss.nameicon}</p>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
export default Sidebar;