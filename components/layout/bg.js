import React from 'react'
import Error from './error';

class Cover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            texts : [{text:"ฐานข้อมูลผู้สูงอายุ",style:"animated infinite bounce delay-2s"},
            {text:"ฐานข้อมูลผู้สูงอายุ2",style:"animated infinite bounce delay-2s"},
            {text:"ฐานข้อมูลผู้สูงอายุ3",style:"animated infinite bounce delay-2s"},
            {text:"ฐานข้อมูลผู้สูงอายุ4",style:"animated infinite bounce delay-2s"},]
        }
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

                </div>

                <div className="warp-text">
                    <div className="text">
                        {
                            this.state.texts.map((item,index)=>{
                                return(
                                    <h1 className="animated infinite bounce delay-5s" >{}</h1>
                                )
                            })
                        }

                        <button
                            className="btn active"
                            onClick={this.handleOauth}
                        >
                            <h2>เข้าสู่หน้าหลัก</h2>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover;