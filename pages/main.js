import React from 'react'
import Sidebar from '../components/layout/sidebar';
import Geochart from '../components/chart/geochart';
import Nav from '../components/nav';
import Nav_logo from '../components/layout/nav_logo';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: true
        }
    }

    collapsible = async () => {
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

                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <Sidebar />
                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">สังคมผู้สูงอายุ</h1>
                            <h2 className="small text-center"></h2>
                            <div className="warp-chart">
                                <Geochart />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;