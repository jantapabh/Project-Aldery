import React from 'react'
import Nav_logo from './layout/nav_logo';
import Nav from '../components/nav';
import Sidebar from '../components/layout/sidebar'
class Navbar_main extends React.Component {

    static defaultProps = {
        status: true
    }

    onConfirmClick = () => {

        if (this.props.status) {
            if (this.props.confirm) {
                this.props.confirm(false)
            }
        }
        else {
            if (this.props.confirm) {
                this.props.confirm(true)
            }
        }
    }

    render() {
        return (
            <div className={`wrapper${this.props.status ? " menuDisplayed" : ""}`}>
                <nav className="nav-other">
                    <ul>
                        <div className="warp-nav-sidebar">
                            <li>
                                <div className="box-hamberger">
                                    <a className={`hamberger btn${this.props.status ? " active" : " not-active"}`} onClick={this.onConfirmClick} >
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
                            <a className={`hamberger btn${this.props.status ? " active" : " not-active"}`} onClick={this.onConfirmClick} >
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>

        )
    }
}
export default Navbar_main;