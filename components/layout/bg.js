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
        else if(this.userOauth.status == "404") {
            return <Error error ="404"/>
        }

        else if(this.userOauth.status == "500") {
            return <Error error ="500"/>
        }
    }

    render() {
        return (
            <div className="warp-bg">
                <div className="bg">
                    <div className="warp-text">
                        <h1>ฐานข้อมูลผู้สูงอายุ</h1>
                        <button 
                            className="btn active"
                            onClick={this.handleOauth}
                         >
                            <h2>เข้าสู่หน้าหลัก</h2>
                        </button>
                        
                    </div>

                    
                </div><h1>ฐานข้อมูลผู้สูงอายุ</h1>
            </div>
        )
    }
}
export default Cover;