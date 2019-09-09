import React from 'react'
import Link from 'next/link'
import '../styles/base.scss'

const links = [
  { href: '/main', label: 'Main' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service' },
  { href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})


class Nav extends React.Component {

  static defaultProps = {
    name: "",
  }

  render() {

    if (this.props.name != "main") {
      return (
        <nav>
          <div className="warp-back" >
            {/* <img src="/static/logo.png" alt="logo" /> */}
            <ul>
              <div className="back">
                <li>
                  <Link href="/">
                    <p>ย้อนกลับ</p>
                  </Link>
                </li>
              </div>
            </ul>
          </div>

        </nav>
      )
    }

    return (
      <nav>
        {/* <img src="/static/logo.png" alt="logo" /> */}
        <ul>
          <div className="warp-manu">
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href}>
                  <p>{label}</p>
                </Link>

              </li>

            ))}

            {/* <Link href="/login">
              <p>Login</p>
            </Link> */}

          </div>

        </ul>
      </nav>
    )
  }
}
export default Nav
