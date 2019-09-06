import React from 'react'

class Card extends React.Component {

    static defaultProps = {
        avatar: [],
    }


    render() {
        return (
            <div className="warp-card">
                <div className="card">
                    {
                        this.props.avatar.map((item, index) => {
                            return (
                                <React.Fragment>
                                    <div className="card-img">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="card-text">

                                    </div>
                                </React.Fragment>


                            )
                        })
                    }

                </div>



            </div>
        )
    }
}
export default Card;