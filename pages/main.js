import React from 'react'
import IconData from '../components/layout/icon-data';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: false
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
                    <div className="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li><img src="/static/home.svg" /><a href="/">หน้าหลัก</a></li>
                            <li><img src="/static/chart.svg" /><a href="/mainchart">ข้อมูลทางสถิติ</a></li>
                            <li><img src="/static/document.svg" /><a href="/maincard">เบี้ยยังชีพผู้สูงอายุ</a></li>
                        </ul>
                        <ul className="non-sidebar-nav">
                            <div className="icon-sidebar">
                                <li><img src="/static/home.svg" /></li>
                                <p>HOME</p>
                            </div>
                            <div className="icon-sidebar">
                                <li><img src="/static/chart.svg" /></li>
                                <p>CHART</p>
                            </div>
                            <div className="icon-sidebar">
                                <li><img src="/static/document.svg" /></li>
                                <p>DOC</p>
                            </div>

                        </ul>
                    </div>
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav>
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
                                        <li>
                                            <p>Main</p>
                                        </li>
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

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;