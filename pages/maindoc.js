import React from 'react'
import Sheetapi from '../config/api'
import CardMain from '../components/layout/cardmain';
import Sidebar from '../components/layout/sidebar';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           

            status: true

        }
    }

    async componentDidMount() {

    }


    toggle = async () => {
        if (!this.state.status) {
            await this.setState({
                status: true
            })
        }
        else {
            await this.setState({
                status: false
            })
        }
    }

    render() {

        return (

            <div className="warp-main">
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                   <Sidebar/>
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav>
                            <ul>
                                <div className="warp-manu">
                                    <li>
                                        <div className="box-hamberger">
                                            <a className={`hamberger btn${this.state.status ? " active" : " not-active"}`} onClick={this.toggle} >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </a>
                                        </div>
                                    </li>

                                </div>
                            </ul>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                           
                             
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main

