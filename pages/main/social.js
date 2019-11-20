import React from 'react'
import Sheetapi from '../../config/api'
import dynamic from 'next/dynamic'
import Navbar_main from '../../components/navbar_main';
import Sidebar from '../../components/layout/sidebar';
import Footer from '../../components/layout/footer';

const BarSocial = dynamic(
    () => import('../../components/chart/barSocial'),
    { ssr: false }
)

const DonutSocial = dynamic(
    () => import('../../components/chart/donutSocial'),
    { ssr: false }
)


const PieSocial = dynamic(
    () => import('../../components/chart/pieSocial'),
    { ssr: false }
)

const PieSocial2 = dynamic(
    () => import('../../components/chart/pieSocial2'),
    { ssr: false }
)

class Social extends React.Component {

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
                            <h1 className="text-center">สภาพทางสังคม</h1>
                            <h2 className="small text-center"></h2>


                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <BarSocial />
                                </div>
                                <div className="chart-contents">
                                    <DonutSocial />
                                </div>
                            </div>

                            <div className="warp-chart">
                                <div className="chart-contents">
                                    <PieSocial />
                                </div>
                                <div className="chart-contents">
                                    <PieSocial2 />
                                </div>

                            </div>

                        </div>

                        <Footer nameFooter="social" />
                    </div>
                </div>

            </div>
        )
    }
}
export default Social;
