import React from 'react'
import Navbar_main from '../../components/navbar_main';
import Sidebar from '../../components/layout/sidebar';
import Sheetapi from '../../config/api'
import dynamic from 'next/dynamic'

const Linechart = dynamic(
    () => import('../../components/chart/lineHelp'),
    { ssr: false }
)

const Piechart = dynamic(
    () => import('../../components/chart/pieHelp'),
    { ssr: false }
)

class Help extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: true
        }
    }

    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

    }

    onConfirm = (order) => {
        this.setState({
            status: order,
        })
    }


    render() {

        return (

            <div className="warp-main">
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <Navbar_main confirm={this.onConfirm} status={this.state.status} />
                    <Sidebar status={this.state.status} />
                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">การช่วยเหลือ</h1>
                            <h2 className="small text-center"></h2>

                            <div className="warp-chart">
                                <Piechart />

                                <div className="chart-contents">
                                    <Linechart />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Help

