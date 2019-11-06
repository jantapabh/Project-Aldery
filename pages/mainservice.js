import React from 'react'
import Sheetapi from '../config/api'
import dynamic from 'next/dynamic'
import Navbar_main from '../components/navbar_main';
import Sidebar from '../components/layout/sidebar';

const Linechart = dynamic(
    () => import('../components/chart/lineService1'),
    { ssr: false }
)

const Piechart = dynamic(
    () => import('../components/chart/pieService1'),
    { ssr: false }
)


class MainService extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: true
        }
    }

    onConfirm = (order) => {
        this.setState({
            status: order,
        })
    }


    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

    }

    render() {

        return (
            <div className="warp-main">
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <Navbar_main confirm={this.onConfirm} status={this.state.status} />
                    <Sidebar status={this.state.status} />


                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">หน่วยงานเเละการบริการ</h1>
                            <h2 className="small text-center"></h2>

                            <div className="warp-chart">
                                <div className="chart-pic">
                                    <Piechart />
                                </div>

                                <div className="chart-contents">
                                    <Linechart />
                                </div>


                                <div className="card-contents-col">
                                    {/* <Card
                                        title="texttttt"
                                        subtitle="subbbb"
                                        img="/static/activehover.svg"
                                    />

                                    <Card
                                        title="texttttt"
                                        subtitle="subbbb"
                                        img="/static/activehover.svg"
                                    /> */}

                                </div>



                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default MainService
