import React, { useState } from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Nav_table = props => {

  const [status, setStatus] = useState(false)
  const [listIndex, setListindex] = useState(
    [
      { name: "Services", href: "/index/services" },
      { name: "Contact", href: "/index/contact" }
    ]
  )

  const collapsible = async () => {
    if (!status) {
      setStatus(true)
    }
    else {
      setStatus(false)
    }
  }

  return (
    <React.Fragment>
      {
        props.name == "table" ?
          <nav>
            <ul>
              <div className="warp-table">
                <Link href="/main/doc">
                  <li>
                    <p>ย้อนกลับ</p>
                  </li>
                </Link>
              </div>

              <div className="warp-manu">
                <ul>
                  <li>
                    {
                      listIndex.map((item, index) => {
                        return (
                          <Link key={index} href={item.href}>
                            <p >{item.name}</p>
                          </Link>
                        )
                      })
                    }
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
          :
          null
      }

      <div className="collapsible-menu">
        <div className="warp-nav-sidebar">
          <div className="box-hamberger">
            <a className={`hamberger btn${status ? " active" : " not-active"}`} onClick={collapsible} >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
        <div className={`menu-content${status ? " show" : ""}`}>
          <ul>
            <li >
              {
                listIndex.map((item, indexs) => {
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


    </React.Fragment >
  )
}
export default Nav_table