import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Login' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
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

export default Nav
