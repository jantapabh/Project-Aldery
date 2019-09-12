import React from 'react'

class FadeImg extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="warp">
                <div className="warp-bg">

                    <img src="/static/bg.jpg" />
                    <img src="/static/bg2.jpg" />
                    <img src="/static/bg3.jpg" />
                    <img src="/static/bg4.jpg" />


                    <div className="warp-text">
                        <div className="text">
                            {/* <h1>สังคมผู้สูงอายุ<br/>สู่มาตรการดูเเลในระดับชุมชน</h1> */}
                            {/* <h5>ความรักของผู้สูงอายุจะมุ่งไปด้านเติมเต็มพลังชีวิตให้เเก่<br/>กันเเละกัน</h5> */}
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default FadeImg;