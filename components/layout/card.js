import React from 'react'

class Card extends React.Component {

    static defaultProps = {
        title: "",
        subtitle: "",
        img: ""
    
    }

    render() {

        return (
            <div className="warp-card">
                <div className="card-group">
                    <div className="card">
                        <div className="card-data">
                            <img src={this.props.img} />
                            <div className="card-text">
                                <h4>{this.props.title}</h4>
                                <h5>{this.props.subtitle}</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card;