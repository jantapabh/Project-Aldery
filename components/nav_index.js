import React from 'react'
import Link from 'next/link'
import Nav_logo from './layout/nav_logo';

class Nav_index extends React.Component {

    static defaultProps = {
        name: "",
    }

    constructor(props) {
        super(props);
        this.state = {
            status: false,
            list: [
                { name: "หน้าหลัก", href: "/main" },
                { name: "ข้อมูลทางสถิติ", href: "/mainchart" },
                { name: "สวัสดิการจากรัฐ", href: "/maindoc" },
                { name: "การบริการ", href: "/mainservice" },
                { name: "โรงพยาบาล", href: "/mainhospital" },
                { name: "ช่วยเหลือ", href: "/mainhelp" },
            ],

            listMain: [{ name: "About", href: "/index/about" },
            { name: "Project", href: "/index/project" },
            { name: "Services", href: "/index/services" },
            { name: "Contact", href: "/index/contact" },
            ],

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
            <React.Fragment>
                <nav>
                    <ul>
                        <div className="warp-table">
                            <Link href="/">
                                <li>
                                    <p>ย้อนกลับ</p>
                                </li>
                            </Link>
                        </div>

                        <div className="warp-manu">
                            <ul>
                                <li>
                                    {
                                        listMain.map((item, index) => {
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
                    <div className={`menu-content${this.state.status ? " show" : ""}`}>
                        <ul>
                            <li >
                                {
                                    listMain.map((item, index) => {
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
                </div>
            </React.Fragment>



        )
    }
}
export default Nav_index