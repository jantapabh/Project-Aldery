import React from 'react'
import Nav_logo from './layout/nav_logo';
import Nav from '../components/nav';
class Navbar_main extends React.Component {
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
        )
    }
}
export default Navbar_main;