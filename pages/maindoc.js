import React from 'react'
import CardData from '../components/layout/cardmain';
import Nav from '../components/nav';
import Nav_logo from '../components/layout/nav_logo';
import Navbar_main from '../components/navbar_main';
import Sidebar from '../components/layout/sidebar';

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

