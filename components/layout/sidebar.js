import React from 'react'

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: "หน้าหลัก", nameicon: "Home", img: "/static/home.svg", link: "/" },
                { name: "รายงานความคืบหน้า", nameicon: "Dashboard", img: "/static/dashboard.svg", link: "/main" },
                { name: "ข้อมูลทางสถิติ", nameicon: "Chart", img: "/static/chart.svg", link: "/main/mainchart" },
                { name: "สวัสดิการจากรัฐ", nameicon: "Benefits", img: "/static/document.svg", link: "/main/maindoc" },
                { name: "หน่วยงาน", nameicon: "Service", img: "/static/service.svg", link: "/main/mainservice" },
                { name: "โรงพยาบาล", nameicon: "Hospital", img: "/static/hospital.svg", link: "/main/mainhospital" },
                { name: "ช่วยเหลือ", nameicon: "Help", img: "/static/help.svg", link: "/main/mainhelp" },
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
                                        <li key={index}><img src={items.img} /><a href={items.link} >{items.name}</a></li>
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