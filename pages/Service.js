import React from 'react'
import '../styles/base.scss'
import Nav from '../components/nav';

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
                        <div className="content">
                           
                            <button className="btn"><h5>หน่วยงานที่เกี่ยวข้อง</h5></button>
                        </div>
                        <div className="content">
                            <button className="btn"><h5>กองทุนผู้สูงอายุ</h5></button>
                        </div>
                        <div className="content">
                            <button className="btn"><h5>โรงพยาบาล</h5></button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
export default Service