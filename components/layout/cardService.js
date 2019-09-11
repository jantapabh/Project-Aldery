import React from 'react'

class cardService extends React.Component {

    static defaultProps = {
        card: []
    }


    render() {
        return (
            <React.Fragment>
                {
                    this.props.card.map((item, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="content">
                                    <img src={item.img} alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.text}</p>
                                        <a href={item.link} className="btn btn-primary" ><h6>{item.name}</h6></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>

        )
    }
}
export default cardService;