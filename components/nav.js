import React from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
          this.props.name == "man" || this.props.name == "woman" || this.props.name == "total" ?
            <React.Fragment>
              <nav className="nav-other">
                <ul>
                  <div className="warp-table">
                    <Link href="/maindoc">
                      <li>
                        <p>ย้อนกลับ</p>
                      </li>
                    </Link>
                  </div>
                  <div className="warp-manu">
                    <ul>
                      <li>
                        {
                          this.state.list.map((item, index) => {
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
            </React.Fragment>
            :
            null
        }

        {
          this.props.name == "/" ?
            <React.Fragment>
              <nav>
                <ul>
                  <div className="nav-logo">
                    <Link href="/">
                      <li>
                        <img src="/static/cover-img5.png"></img>
                        <p>Eldery DB</p>
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
                  <div className="nav-logo">
                    <Link href="/">
                      <li>
                        <img src="/static/cover-img5.png"></img>
                        <p>Eldery DB</p>
                      </li>
                    </Link>
                  </div>
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

      </React.Fragment>
    )
  }
}
export default Nav