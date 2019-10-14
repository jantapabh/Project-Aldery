import React from 'react'
import Sidebar from '../components/layout/sidebar';
import CardData from '../components/layout/cardmain';
import Link from 'next/link';
import dynamic from 'next/dynamic'

class Maindoc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [{ name: "Main", link: "/main" },
            { name: "Dashboard", link: "/mainchart" },
            { name: "Service", link: "/service" },
            { name: "Hospital", link: "/hospital" },
            { name: "Help", link: "/help" },
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
                                    <div className="nav-bar-main">
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
                                    </div>

                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">สวัสดิการจากรัฐ</h1>

                            <CardData />
                            <div className="data-source" >
                                <Link href="/">
                                    <img src="/static/logo-google-sheets.svg" />
                                </Link>
                                <div className="text-source">
                                    <h6 >ที่มา: แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ ผู้พิการเเละผู้ป่วยในชุมชน</h6>
                                    <h6>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</h6>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Maindoc

