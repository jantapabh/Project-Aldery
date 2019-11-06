import React from 'react'

class CardAbout extends React.Component {

    static defaultProps = {
        title: "",
        subtitle: "",
        img: ""

    }

    render() {

        return (
            <div className="warp-card">
                <div className="card-group">
                    <div class="card">
                        <img src="/static/old-man.svg" />
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default CardAbout;