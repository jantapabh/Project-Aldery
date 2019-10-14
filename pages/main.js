import React from 'react'
import Link from 'next/link'
import IconData from '../components/layout/icon-data';
import Sidebar from '../components/layout/sidebar';
import Geochart from '../components/chart/geochart';


class Main extends React.Component {

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
                            <h1 className="text-center">สังคมผู้สูงอายุ</h1>
                            <h2 className="small text-center"></h2>

                            <div className="warp-icon-data">
                                <IconData />
                            </div>
                            <p className="text-center animated fadeInDown delay-2s ">ที่มา: รายงานสรุปยอดผู้ได้รับเบี้ยเเยกตามประเภท อปท. เทศบาลเมืองกะทู้ อ.กะทู้ จังหวัดภูเก็ต</p>
                            <Geochart />

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;