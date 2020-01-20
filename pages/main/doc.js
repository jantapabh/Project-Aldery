import React from 'react'
import Navbar_main from '../../components/nav_main';
import Sidebar from '../../components/layout/sidebar';
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'

const PieDoc = dynamic(
    () => import('../../components/chart/pieDoc'),
    { ssr: false }
)

class Doc extends React.Component {

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

    render() {

        return (

            <div className="warp-main">
                <Navbar_main confirm={this.onConfirm} status={this.state.status} />
                <Sidebar status={this.state.status} />
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">สวัสดิการจากรัฐ</h1>
                            <br />
                            <div className="warp-chart">
                                <PieDoc />
                            </div>
                            <Footer nameFooter="doc" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Doc

