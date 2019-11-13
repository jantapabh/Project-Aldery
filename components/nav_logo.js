import React from 'react'
import Link from 'next/link'

class Nav_logo extends React.Component {
    render() {
        return (
            <div className="nav-logo">
                <Link href="/">
                    <li>
                        <img src="/static/cover-img5.png"></img>
                        <p>Eldery DB</p>
                    </li>
                </Link>
            </div>
        )
    }
}
export default Nav_logo;