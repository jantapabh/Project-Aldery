import React from 'react'
import Sheetapi from '../config/api'
import Sidebar from '../components/layout/sidebar';
import dynamic from 'next/dynamic'
import Radialchart from '../components/chart/radialchart';

const Areachart = dynamic(
    () => import('../components/chart/area'),
    { ssr: false }
)


class Mainchart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: ["Main","Dashboard","Service","Hospital","Help"],
            status: true
        }
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

    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

    }

    render() {

        return (
            <div className="warp-main">
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <Sidebar />
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav className="main">
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
                            <div className="nav-bar-main">
                                <ul>
                                    <div className="nav-bar-main">
                                       {
                                           this.state.list.map((item,index) => {
                                               return(
                                                   <li key={index}>
                                                      <p>{item}</p> 
                                                   </li>
                                               )
                                           })
                                       }
                                    </div>

                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">ข้อมูลทางสถิติ</h1>
                            <h2 className="small text-center"></h2>
                            <Radialchart/>
                            <Areachart />

                            

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Mainchart
