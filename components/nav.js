import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/main', label: 'Main' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service' },


]

class Nav extends React.Component {

  static defaultProps = {
    name: "",
  }

  render() {

    return (
      <nav>

        {
          this.props.name == "/" ?
            <React.Fragment>
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
            :
            this.props.name == "man" || this.props.name == "woman" || this.props.name == "total"  ?
            <React.Fragment>
              <div className="warp-back">
            <ul>
              <div className="warp-manu">
                <li >
                  <Link href="/main">
                    <p>ย้อนกลับ</p>
                  </Link>

                </li>

              </div>

            </ul>
          </div>
            </React.Fragment>
            :
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
            
        }
        {/* <img src="/static/logo.png" alt="logo" /> */}



      </nav>
    )
  }
}
export default Nav
