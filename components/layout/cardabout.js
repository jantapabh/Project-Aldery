import React from 'react'

class CardAbout extends React.Component {

    static defaultProps = {
        id: "",
        title: "Special title treatment",
        subtitle: "It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.",
        img: "",
        click: "Go somewhere"
    }

    constructor(props) {
        super(props);
        this.state = {
            id: "0",
            status: false
        }
    }

    setStatus = (value) => {


        if (this.state.id == this.props.id) {
            if (!this.state.status) {
                this.setState({
                    status: true
                })
                console.log("1.1");
                this.props.confirm(true)
            }

            else {
                this.setState({
                    status: false
                })
                console.log("1.2");
                this.props.confirm(false)
            }
        }


        else {

            if (!this.state.status) {
                this.setState({
                    status: true
                })
                this.props.confirm(true)

                console.log("2.1");

            }

            else {
                this.setState({
                    status: false
                })
                console.log("2.2");
                this.props.confirm(false)
            }



        }

        this.setState({
            id: value.target.id
        })


    }

    render() {


        console.log("ID///Status", this.state.id, this.state.status);


        const { id, img, title, subtitle, click } = this.props

        return (
            <React.Fragment>


                <div className={`${!this.state.status ? "non" : "show"}`}>

                    {
                        !this.state.status ?
                            <div className="warp-card">
                                <div className="card-group">
                                    <div class="card">
                                        <img src={img} />
                                        <div class="card-body">
                                            <h5 class="card-title">{title}</h5>
                                            <p class="card-text">{subtitle}</p>
                                            <a href="#" class="btn btn-primary" id={id} onClick={this.setStatus}>{click}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null

                    }

                    {
                        this.props.id == this.state.id && this.state.status ?

                            // <div className="warp-card" >
                            <div className="container-detail animated  fadeIn">
                                <div className="item-header">
                                    <h5 class="card-title">{title}</h5>
                                    <p class="card-text">{subtitle}</p>
                                </div>
                                <div className="btn-close">
                                    <button type="button" class="close" id={id} onClick={this.setStatus} aria-label="Close"   >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                            </div>
                            :
                            null

                    }



                </div>



            </React.Fragment>
        )
    }
}
export default CardAbout;