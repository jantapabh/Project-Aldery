import React from 'react'
import Link from 'next/link'
import Sheetapi from '../config/api'
import CardMain from '../components/layout/cardmain';
import Sidebar from '../components/layout/sidebar';
import Card from '../components/layout/card';


class Help extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [{ name: "หน้าหลัก", link: "/" },
            { name: "ความคืบหน้า", link: "/main" },
            { name: "ข้อมูลทางสถิติ", link: "/mainchart" },
            { name: "สวัสดิการจากรัฐ", link: "/maindoc" },
            { name: "การบริการ", link: "/service" },
            { name: "โรงพยาบาล", link: "/hospital" },
            ],
            status: true
        }
    }

    async componentDidMount() {

    }


    toggle = async () => {
        if (!this.state.status) {
            await this.setState({
                status: true
            })
        }
        else {
            await this.setState({
                status: false
            })
        }
    }

    render() {

        return (

            <div className="warp-main">
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <Sidebar />
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav className="main">
                            <ul>
                                <div className="warp-manu">
                                    <li>
                                        <div className="box-hamberger">
                                            <a className={`hamberger btn${this.state.status ? " active" : " not-active"}`} onClick={this.toggle} >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </a>
                                        </div>
                                    </li>

                                </div>
                            </ul>
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
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">การช่วยเหลือ</h1>
                            <h2 className="small text-center"></h2>

                            <Card 
                                title = "texttttt"
                                subtitle = "subbbb"
                                img = "/static/activehover.svg"
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Help

