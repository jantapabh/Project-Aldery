import React from 'react'
import Sheetapi from '../../config/api'
import dynamic from 'next/dynamic'
import Navbar_main from '../../components/navbar_main';
import Sidebar from '../../components/layout/sidebar';

// const Radachart = dynamic(
//     () => import('../components/chart/radachart'),
//     { ssr: false }
// )

const Barchart = dynamic(
    () => import('../../components/chart/barChart'),
    { ssr: false }
)

const Piechart = dynamic(
    () => import('../../components/chart/pieChart'),
    { ssr: false }
)

const Piechart2 = dynamic(
    () => import('../../components/chart/pieChart2'),
    { ssr: false }
)

class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true,
        };
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
                <Navbar_main confirm={this.onConfirm} status={this.state.status} />
                <Sidebar status={this.state.status} />
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">ข้อมูลทางสถิติ</h1>
                            <h2 className="small text-center"></h2>
                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <Piechart />
                                </div>
                                <div className="chart-contents">
                                    <Piechart2 />
                                </div>
                            </div>

                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <Barchart />
                                </div>
                                <div className="chart-contents">
                                    {/* <Radachart /> */}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Chart