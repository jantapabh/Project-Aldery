import React from 'react'
import Sheetapi from '../../config/api'
import dynamic from 'next/dynamic'
import Navbar_main from '../../components/navbar_main';
import Sidebar from '../../components/layout/sidebar';

const PieHospital = dynamic(
    () => import('../../components/chart/piehospital'),
    { ssr: false }
)

const Barchart = dynamic(
    () => import('../../components/chart/barHospital'),
    { ssr: false }
)

const BarHospital2 = dynamic(
    () => import('../../components/chart/barHospital2'),
    { ssr: false }
)

class MainHospital extends React.Component {

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
                            <h1 className="text-center">โรงพยาบาลเเละการดูแลรักษา</h1>
                            <h2 className="small text-center"></h2>

                            <div className="warp-chart">
                                <div className="chart-pic">
                                    <PieHospital />
                                </div>

                                <div className="chart-contents">
                                    <Barchart />
                                </div>
                             
                            </div>

                            <div className="warp-chart">
                                <BarHospital2/>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default MainHospital;