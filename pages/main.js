import React from 'react'
import Map from '../components/layout/Map';
import Navbar_main from '../components/navbar_main';
import Sidebar from '../components/layout/sidebar';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true,
        };
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
                            <h1 className="text-center">สังคมผู้สูงอายุ</h1>
                            <h2 className="small text-center"></h2>
                            <div className="warp-map">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;