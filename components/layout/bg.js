import React from 'react'
import Error from './error';

class Cover extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.userOauth = JSON.parse(localStorage.getItem("myOauth"))
    }

    handleOauth = () => {
        if (this.userOauth.status == "200") {
            setTimeout(function () {
                window.location.href = "/sheet";
            }, 500);
        }
        else if (this.userOauth.status == "404") {
            return <Error error="404" />
        }

        else if (this.userOauth.status == "500") {
            return <Error error="500" />
        }
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