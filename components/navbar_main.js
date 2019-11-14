import React from 'react'
import Nav_logo from './nav_logo';
import Nav from '../components/nav';
import Link from 'next/link'
import Sidebar from '../components/layout/sidebar'
class Navbar_main extends React.Component {

    static defaultProps = {
        status: true
    }

    constructor(props) {
        super(props);
        this.state = {
            listMain: [
                { name: "Dashboard", href: "/main" },
                { name: "About", href: "/index/about" },
                { name: "Project", href: "/index/project" },
                { name: "Services", href: "/index/services" },
                { name: "Contact", href: "/index/contact" },
            ],

        }
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

    render() {
        const { listMain } = this.state
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

                <div className="collapsible-menu">
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
                    <div className={`menu-content${this.state.status ? " show" : ""}`}>
                        <ul>
                            <li >
                                {
                                    listMain.map((item, indexs) => {
                                        return (
                                            <Link key={indexs} href={item.href}>
                                                <p >{item.name}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default Navbar_main;