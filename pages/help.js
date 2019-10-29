import React from 'react'
import Sidebar from '../components/layout/sidebar';
import Card from '../components/layout/card';
import Nav from '../components/nav';
import Nav_logo from '../components/layout/nav_logo';

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
                            <h1 className="text-center">การช่วยเหลือ</h1>
                            <h2 className="small text-center"></h2>

                            <Card
                                title="texttttt"
                                subtitle="subbbb"
                                img="/static/activehover.svg"
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Help

