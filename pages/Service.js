import React from 'react'
import '../styles/base.scss'
import CardProfile from '../components/layout/cardCover'

import Nav from '../components/nav';

class Service extends React.Component {
    render() {
        return (
            <div>
                <Nav name="about" />
                <CardProfile
                    avatar="/static/cover.png"
                    name="cover"
                    text_head="ติดต่อเจ้าหน้าที่"
                // text="เข้าสู่หน้าหลัก"
                />


            </div>
        )
    }
}
export default Service