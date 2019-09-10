import React from 'react'
import '../styles/base.scss'
import Nav from '../components/nav';

const list = [
    { name: "กรมกิจการผู้สูงอายุ", img: "/static/logo-about.png", text: "มีภารกิจเกี่ยวกับการส่งเสริมและพัฒนาศักยภาพ การจัดสวัสดิการ และการคุ้มครองพิทักษ์สิทธิผู้สูงอายุ", link: "http://www.dop.go.th/th" },
    { name: "กองทุนผู้สูงอายุ", img: "/static/logo-about2.jpg", text: " เพื่อเป็นทุนใช้จ่ายเกี่ยวกับการคุ้มครอง การส่งเสริม และการสนับสนุน ผู้สูงอายุ ให้มีศักยภาพ ความมั่นคง และมีคุณภาพชีวิตที่ดี",link:"http://www.olderfund.dop.go.th/" },
    { name: "คนใจดี", img: "/static/logo-about3.png", text: "เป็นศูนย์ส่งเสริมการให้และการอาสาช่วยเหลือสังคม ",link:"http://www.konjaidee.org/" },
]

class Service extends React.Component {

    render() {
        return (
            <div>
                <Nav name="service" />
                <div className="warp-bar">
                    <div className="warp-content" >
                        <div className="text-content">
                            <h2 >สังคมผู้สูงอายุ</h2>
                            <h6>คือ สังคมที่มีประชากรอายุ 60 ปีขึ้นไป ในอัตราเท่ากับ หรือมากกว่าร้อยละ 10 ของประชากรในพื้นที่นั้น</h6>
                        </div>
                    </div>
                    <div className="service-content">
                        {
                            list.map((item, index) => {
                                return (
                                    <div className="card">
                                        <div className="content">
                                            <img src={item.img} alt={item.name} />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.text}</p>
                                                <a href={item.link} className="btn btn-primary" ><h6>{item.name}</h6></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>

            </div>
        )
    }
}
export default Service