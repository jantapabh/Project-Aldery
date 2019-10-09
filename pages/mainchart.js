import React from 'react'
import Radialchart from '../components/chart/radialchart';
import Barchart from '../components/chart/barchart';
import Sheetapi from '../config/api'


class Main extends React.Component {

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
                    <div className="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="/mainchart">ข้อมูลทางสถิติ</a></li>
                            <li><a href="/maincard">เบี้ยยังชีพผู้สูงอายุ</a></li>
                        </ul>
                    </div>
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav>
                            <ul>
                                <div className="warp-manu">
                                    <li>
                                        <div className="box-hamberger">
                                            <a className={`btn hamberger${this.state.status ? " active" : " not-active"}`} onClick={this.toggle} >
                                                <div className="span-hamberger">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>

                                            </a>
                                        </div>
                                    </li>

                                </div>
                            </ul>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <Radialchart />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main
