import React from 'react'
import Link from 'next/link'

const links = [
  // { href: '/main', label: 'Dashboard' },
  // { href: '/mainchart', label: 'ข้อมูลทางสถิติ' },
  // { href: '/service', label: 'การบริการ' },
  // { href: '/hospital', label: 'การรักษา' },
  // { href: '/help', label: 'ช่วยเหลือ' },


  { href: '/', label: 'หน้าหลัก' },
  { href: '/', label: 'XXXXX' },
  { href: '/', label: 'XXXXX' },
  { href: '/contact', label: 'การติดต่อ' },


]

class Nav extends React.Component {

  static defaultProps = {
    name: "",
  }

  constructor(props) {
    super(props);
    this.state = {
      status: false
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

    return (
      <React.Fragment>

        <nav>

          {
            this.props.name == "man" || this.props.name == "woman" || this.props.name == "total" ?
              <React.Fragment>
                <div className="warp-back">
                  <ul>
                    <div className="warp-manu">
                      <li >
                        <Link href="/maindoc">
                          <p>ย้อนกลับ</p>
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </React.Fragment>
                :
                <React.Fragment>
                  <div className="warp-back">
                    <ul>
                      <div className="warp-manu">
                        <li >
                          <Link href="/">
                            <p>ย้อนกลับ</p>
                          </Link>

                        </li>
                      </div>
                    </ul>
                  </div>
                  <ul>
                    <div className="warp-manu">
                      {links.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link href={item.href}>
                              <p>{item.label}</p>
                            </Link>
                          </li>
                        )
                      }
                      )}
                    </div>
                  </ul>
                </React.Fragment>
          }
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

              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.href}>
                      <p>{item.label}</p>
                    </Link>
                  </li>
                )
              }
              )}
            </ul>
          </div>
        </div>

      </React.Fragment>
    )
  }
}
export default Nav