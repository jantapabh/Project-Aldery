import React from 'react'
import Link from 'next/link'


class Mainsildbar extends React.Component {

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
                {/* <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <nav>
                        <ul>
                            <div className="warp-manu">
                                <li>
                                    <a href="#" className="menu-toggle" onClick={this.toggle}>
                                        <span className="btn">ppp</span>
                                    </a>
                                </li>

                            </div>
                        </ul>
                    </nav>
                </div> */}


                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <div className="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <nav>
                        <ul>
                            <div className="warp-manu">
                                <li>
                                    <a href="#" className="menu-toggle" onClick={this.toggle}>
                                        <span className="btn">ppp</span>
                                    </a>
                                </li>

                            </div>
                        </ul>
                    </nav>
                </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <a href="#" className="menu-toggle" onClick={this.toggle}>
                                        <span className="btn">ppp</span>
                                    </a> */}
                                    <h1 className="text-center">Bootstrap Sidebar</h1>
                                    <h2 className="small text-center">Second Header</h2>
                                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium perferendis maiores velit ad id delectus nisi eligendi doloremque officia necessitatibus, repellendus alias omnis, natus nam voluptates dolor vel minus ab?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Mainsildbar;