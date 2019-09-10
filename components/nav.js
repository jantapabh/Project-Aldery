import React from 'react'
import Link from 'next/link'
import '../styles/base.scss'

const links = [
  { href: '/main', label: 'Main' },
  { href: '/about', label: 'About'  }
  
]

class Nav extends React.Component {

  static defaultProps = {
    name: "",
  }

  render() {

    return (
      <nav>
        {/* <img src="/static/logo.png" alt="logo" /> */}
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
      </nav>
    )
  }
}
export default Nav
