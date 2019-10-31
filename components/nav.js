import React from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Nav_logo from './layout/nav_logo';

class Nav extends React.Component {

  static defaultProps = {
    name: "",
  }

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      list: [{ name: "หน้าหลัก", href: "/" },
      { name: "ข้อมูลทางสถิติ", href: "/mainchart" },
      { name: "สวัสดิการจากรัฐ", href: "/maindoc" },
      { name: "การบริการ", href: "/service" },
      { name: "โรงพยาบาล", href: "/hospital" },
      { name: "ช่วยเหลือ", href: "/help" },
      ],

      listMain: [{ name: "About", href: "#" },
      { name: "Project", href: "#" },
      { name: "Services", href: "#" },
      { name: "Contact", href: "#" },
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

    const { list } = this.state

    return (
      <React.Fragment>
        {
          this.props.name == "/" ?
            <React.Fragment>
              <nav>
                <ul>
                  <Nav_logo />

                  <div className="warp-manu">
                    <ul>
                      <li>
                        <p><AnchorLink href='#about'>About</AnchorLink></p>
                        <p><AnchorLink href='#project'>Project</AnchorLink></p>
                        <p><AnchorLink href='#services'>Services</AnchorLink></p>
                        <p><AnchorLink href='#contact'>Contact</AnchorLink></p>
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
                      <p><AnchorLink href='#about'>About</AnchorLink></p>
                      <p><AnchorLink href='#project'>Project</AnchorLink></p>
                      <p><AnchorLink href='#services'>Services</AnchorLink></p>
                      <p><AnchorLink href='#contact'>Contact</AnchorLink></p>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
            :
            null
        }

        {
          this.props.name == "main" ?
            <React.Fragment>
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
            </React.Fragment>

            :
            null
        }

        {
          this.props.name == "" ?
            <React.Fragment>
              <nav>
                <ul>
                  <div className="warp-table">
                    <Link href="/main">
                      <li>
                        <p>ย้อนกลับ</p>
                      </li>
                    </Link>
                  </div>

                  <div className="warp-manu">
                    <ul>
                      <li>
                        <p><AnchorLink href='#about'>About</AnchorLink></p>
                        <p><AnchorLink href='#project'>Project</AnchorLink></p>
                        <p><AnchorLink href='#services'>Services</AnchorLink></p>
                        <p><AnchorLink href='#contact'>Contact</AnchorLink></p>
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
                      <p><AnchorLink href='#about'>About</AnchorLink></p>
                      <p><AnchorLink href='#project'>Project</AnchorLink></p>
                      <p><AnchorLink href='#services'>Services</AnchorLink></p>
                      <p><AnchorLink href='#contact'>Contact</AnchorLink></p>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
            :
            null

        }



      </React.Fragment >
    )
  }
}
export default Nav