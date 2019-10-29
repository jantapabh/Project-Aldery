import React from 'react'
import Sidebar from '../components/layout/sidebar';
import CardData from '../components/layout/cardmain';
import Nav from '../components/nav';
import Nav_logo from '../components/layout/nav_logo';

class Maindoc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [{ name: "หน้าหลัก", link: "/" },
            { name: "ความคืบหน้า", link: "/main" },
            { name: "ข้อมูลทางสถิติ", link: "/mainchart" },
            { name: "การบริการ", link: "/service" },
            { name: "โรงพยาบาล", link: "/hospital" },
            { name: "ช่วยเหลือ", link: "/help" },
            ],
            status: true
        }
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
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav className="nav-other">
                            <ul>
                                <div className="warp-nav-sidebar">
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
                                <Nav name="main" />
                            </ul>
                        </nav>
                        <div class="collapsible-menu">
                            <div className="warp-nav-sidebar">
                                <Nav_logo />
                                <div className="box-hamberger">
                                    <a className={`hamberger btn${this.state.status ? " active" : " not-active"}`} onClick={this.collapsible} >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Sidebar />

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">สวัสดิการจากรัฐ</h1>

                            <CardData />
                            <div className="data-source" >
                                {/* <Link href="/"> */}
                                <img src="/static/logo-google-sheets.svg" />
                                {/* </Link> */}
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

