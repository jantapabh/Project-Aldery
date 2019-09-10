import React from 'react'
import '../styles/base.scss'
import Nav from '../components/nav'



class About extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <Nav name="about" />
                <div className="warp-about">
               
                    {/* <div className="content-about">
                        <div className="content">

                            <h3>ประเทศไทยกับสังคมผู้สูงอายุ</h3>
                            <p>สังคมผู้สูงอายุ คือ สังคมที่มีประชากรอายุ 60 ปีขึ้นไป
                            ในอัตราเท่ากับ หรือมากกว่าร้อยละ
                            10 ของประชากรในพื้นที่นั้น
                        </p>

                        </div>

                    </div> */}


                    <div className="about-chart">
                        <div className="chart">

                        </div>
                    </div>


                </div>



            </div>
        )
    }
}
export default About;

