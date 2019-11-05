import React from 'react'

class CardLink extends React.Component {

    static defaultProps = {
        title: "",
        subtitle: "",
        img: ""

    }

    render() {

        return (
            <div className="warp-card-help">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary"><a href="#" class="card-link">Card link</a></button>
                    </div>
                </div>
            </div>

        )
    }
}
export default CardLink;