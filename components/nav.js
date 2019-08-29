import React from 'react'
import Link from 'next/link'
import '../styles/base.scss'

const links = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Login' }
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
          {/* <img src="/static/logo.png" alt="logo" /> */}
          <ul>
            <div className="warp-back">
                <li>
                  <Link href="/">
                    <p>ย้อนกลับ</p>
                  </Link>
                </li>
            </div>
          </ul>
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
          </div>

        </ul>

      </nav>
    )
  }
}
export default Nav
