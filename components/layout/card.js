import React from 'react'

class Card extends React.Component {

    static defaultProps = {
        card: [],
    }


    render() {
        return (
            <div className="warp-card">

                {
                    this.props.card.map((item, index) => {
                        return (
                            <div className="card">

                                <div className="card-img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="card-text">
                                    <h5>{item.text}</h5>
                                </div>


                            </div>


                        )
                    })
                }

            </div>
        )
    }
}
export default Card;