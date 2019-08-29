import React from 'react'
import '../styles/base.scss'
import CardProfile from '../components/layout/cardCover'
import Nav from '../components/nav'


class contact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav name="contace" />
                <CardProfile
                    avatar="/static/cover.png"
                    name="cover"
                    text_head="ติดต่อเจ้าหน้าที่"
                    text="เข้าสู่หน้าหลัก"
                />

            </div>
        )
    }
}
export default contact
