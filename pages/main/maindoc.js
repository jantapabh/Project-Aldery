import React from 'react'
import CardData from '../../components/layout/cardmain';
import Navbar_main from '../../components/navbar_main';
import Sidebar from '../../components/layout/sidebar';

class Maindoc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }

    onConfirm = (order) => {
        this.setState({
            status: order,
        })
    }

    render() {

        return (

            <div className="warp-main">
                <Navbar_main confirm={this.onConfirm} status={this.state.status} />
                <Sidebar status={this.state.status} />
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">สวัสดิการจากรัฐ</h1>

                            <CardData />
                            <div className="data-source" >
                                <a
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/15bzSXCpQI7qVZyW3-kCQsQ1Qg_6ssRSTa5X4aNavIp8/edit?usp=sharing">
                                    <img src="/static/logo-google-sheets.svg" />
                                </a>

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

