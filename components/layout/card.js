import React from 'react'

class Card extends React.Component {

    render() {
        return (
            <div className="warp-card">
                <div className="card-group">
                    <div className="card">
                        <div className="card-data">
                            <img src="/static/old-man.svg" />
                            <div className="card-text">
                                <h4>Some text</h4>
                                <h5>1000</h5>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="card-group">
                    <div className="card">
                        <div className="card-data">
                            <img src="/static/old-man.svg" />
                            <div className="card-text">
                                <h4>Some text</h4>
                                <h5>1000</h5>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="card-group">
                    <div className="card">
                        <div className="card-data">
                            <img src="/static/old-man.svg" />
                            <div className="card-text">
                                <h4>Some text</h4>
                                <h5>1000</h5>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Card;