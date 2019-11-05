import React from 'react'
import Navbar_main from '../components/navbar_main';
import Sidebar from '../components/layout/sidebar';
import CardLink from '../components/layout/cardlinks';
import Card from '../components/layout/card';

class MainHelp extends React.Component {

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
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <Navbar_main confirm={this.onConfirm} status={this.state.status} />
                    <Sidebar status={this.state.status} />

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">การช่วยเหลือ</h1>
                            <h2 className="small text-center"></h2>

                            <CardLink
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
export default MainHelp

