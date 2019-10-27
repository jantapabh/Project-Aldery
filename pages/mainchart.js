import React from 'react'
import Sheetapi from '../config/api'
import Sidebar from '../components/layout/sidebar';

import dynamic from 'next/dynamic'
import Navbar from '../components/navbar_main';

const Areachart = dynamic(
    () => import('../components/chart/area'),
    { ssr: false }
)

const Radachart = dynamic(
    () => import('../components/chart/radachart'),
    { ssr: false }
)

const Barchart = dynamic(
    () => import('../components/chart/barchart2'),
    { ssr: false }
)

const Picchart = dynamic(
    () => import('../components/chart/piechart'),
    { ssr: false }
)

class Mainchart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

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

    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

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
                                <Navbar />

                            </ul>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">ข้อมูลทางสถิติ</h1>
                            <h2 className="small text-center"></h2>
                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <Radachart />
                                </div>
                                <div className="chart-contents">
                                    <Areachart />
                                </div>
                            </div>

                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <Barchart />
                                </div>
                                <div className="chart-contents">
                                    <Picchart />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Mainchart
