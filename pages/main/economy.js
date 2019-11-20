import React from 'react'
import Sheetapi from '../../config/api'
import dynamic from 'next/dynamic'
import Navbar_main from '../../components/navbar_main';
import Sidebar from '../../components/layout/sidebar';
import Footer from '../../components/layout/footer';

const PieEconomy = dynamic(
    () => import('../../components/chart/pieEconomy'),
    { ssr: false }
)

const PieEconomy2 = dynamic(
    () => import('../../components/chart/pieEconomy2'),
    { ssr: false }
)

const PieEconomy3 = dynamic(
    () => import('../../components/chart/pieEconomy3'),
    { ssr: false }
)

const BarEconomy = dynamic(
    () => import('../../components/chart/barEconomy'),
    { ssr: false }
)

const BarEconomy2 = dynamic(
    () => import('../../components/chart/barEconomy2'),
    { ssr: false }
)

const BarEconomy3 = dynamic(
    () => import('../../components/chart/barEconomy3'),
    { ssr: false }
)


class Economy extends React.Component {

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
                            <h1 className="text-center">ด้านเศรษฐกิจ</h1>
                            <h2 className="small text-center"></h2>

                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <PieEconomy />
                                </div>
                                <div className="chart-contents">
                                    <PieEconomy2 />
                                </div>

                            </div>

                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <BarEconomy />
                                </div>
                                <div className="chart-contents">
                                    <BarEconomy2 />
                                </div>
                            </div>

                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <BarEconomy3 />
                                </div>
                                <div className="chart-contents">
                                    <PieEconomy3 />
                                </div>
                            </div>

                        </div>

                        <Footer nameFooter="economy" />
                    </div>
                </div>

            </div>
        )
    }
}
export default Economy;
