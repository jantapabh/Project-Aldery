import React from 'react'
import Card from '../components/layout/card';
import Nav from '../components/nav';
import Nav_logo from '../components/layout/nav_logo';
import Navbar_main from '../components/navbar_main';
import Sidebar from '../components/layout/sidebar';

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

    onConfirm = (order) => {
        this.setState({
            status: order,
        })
    }


    render() {

        return (

            <div className="warp-main">
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <Navbar_main confirm={this.onConfirm} status={this.state.status} />
                    <Sidebar status={this.state.status} />

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

