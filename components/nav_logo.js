import React from 'react'
import Link from 'next/link'


const Nav_logo = () => {
    return (
        <div className="nav-logo">
            <Link href="/">
                <li>
                    {/* <img src="/static/cover-img5.png"></img> */}
                    <img src="/static/logomain.svg" alt="logo"/>
                    <h4>Eldery DB</h4>
                </li>
            </Link>
        </div>
    )
}
export default Nav_logo;