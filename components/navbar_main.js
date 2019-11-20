import React from 'react'
import Nav_logo from './nav_logo';
import Link from 'next/link'
class Navbar_main extends React.Component {

    static defaultProps = {
        status: true
    }

    constructor(props) {
        super(props);
        this.state = {
            listMain: [{ name: "About", href: "/index/about" },
            { name: "Project", href: "/index/project" },
            { name: "Services", href: "/index/services" },
            { name: "Contact", href: "/index/contact" },
            ],
            list: [
                { name: "หน้าหลัก", href: "/" },
                { name: "ข้อมูลทางสถิติ", href: "/main/chart" },
                { name: "สวัสดิการจากรัฐ", href: "/main/doc" },
                { name: "การบริการ", href: "/main/service" },
                { name: "สภาพทางสังคม", href: "/main/social" },
                { name: "ด้านเศรษฐกิจ", href: "/main/economy" },
                { name: "โรงพยาบาล", href: "/main/hospital" },
                { name: "ช่วยเหลือ", href: "/main/help" },
            ],
            status: true

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
        const { list } = this.state
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
                        <div className="warp-manu">
                            <ul>
                                <li>
                                    {
                                        this.state.listMain.map((item, index) => {
                                            return (
                                                <Link href={item.href}>
                                                    <p key={index}>{item.name}</p>
                                                </Link>
                                            )
                                        })
                                    }
                                </li>
                            </ul>
                        </div>
                    </ul>
                </nav>

                <div className="collapsible-menu">
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
                    <div className={`menu-content${this.state.status ? " show" : ""}`}>
                        <ul>
                            <li >
                                {
                                    list.map((item, indexs) => {
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