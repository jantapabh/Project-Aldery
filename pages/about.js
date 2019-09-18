import React from 'react'
import Nav from '../components/nav'
import Linechart from '../components/chart/linechart';

class About extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="warp-bar">
                <Nav name="about" />
               
                    <div className="warp-content" >
                        <div className="text-content">
                            <h2 >สังคมผู้สูงอายุ</h2>
                            <h6>คือ สังคมที่มีประชากรอายุ 60 ปีขึ้นไป ในอัตราเท่ากับ หรือมากกว่าร้อยละ 10 ของประชากรในพื้นที่นั้น</h6>
                        </div>
                    </div>

                    <div className="line-chart">
                        <Linechart/>
                    </div>
               
                         
                 

                           
                            
                   

            

            </div >
        )
    }
}
export default About;

