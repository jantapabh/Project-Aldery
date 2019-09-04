import React from 'react'

class Cover extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    handleOauth = () => {
        window.location.href = "/main";
    }

    render() {
        return (
            <div className="warp">
                <div className="warp-bg">

                    <img src="/static/bg.jpg" />
                    <img src="/static/bg2.jpg" />
                    <img src="/static/bg5.jpg" />
                    <img src="/static/bg3.jpg" />


                    <div className="warp-text">
                        <div className="text">
                            <h1>สังคมผู้สูงอายุ สู่มาตรการดูเเลในระดับชุมชน</h1>
                            <h5>ความรักของผู้สูงอายุจะมุ่งไปด้านเติมเต็มพลังชีวิตให้เเก่กันเเละกัน</h5>
                            <button
                                className="btn active"
                                onClick={this.handleOauth}
                            >
                                <h2>เข้าสู่หน้าหลัก</h2>
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}
export default Cover;