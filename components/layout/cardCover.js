import React from 'react'
import Load from './load';
import Error from './error';

class CardCover extends React.Component {

    static defaultProps = {
        avatar: "",
        name: "",
        text_head: "",
        text: ""
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.userOauth = JSON.parse(localStorage.getItem("myOauth"))
    }

    handleOauth = () => {
        if (this.userOauth.status == "200") {
            setTimeout(function () {
                window.location.href = "/Sheet";
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
            <div className="warp-cover">
                <div className="warp-text">
                    <h1>{this.props.text_head}</h1>
                    <button
                        type="button"
                        className="btn"
                        onClick={this.handleOauth}
                    >
                        <h6>{this.props.text}</h6></button>
                </div>
                <div className="cover">
                    <img src={this.props.avatar} alt={this.props.cover} />
                </div>

            </div>
        )
    }
}
export default CardCover;