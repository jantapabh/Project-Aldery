import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navbar_main from '../../components/nav_main';
import Sidebar from '../../components/layout/sidebar';
import Footer from '../../components/layout/footer';

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

const Chart = () => {

    const [status, setStatus] = useState(true)

    const onConfirm = (order) => {
        setStatus(order)
    }

    return (
        <div className="warp-main">
            <Navbar_main confirm={onConfirm} status={status} />
            <Sidebar status={status} />
            <div className={`wrapper${status ? " menuDisplayed" : ""}`}>
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
                        </div>

                    </div>
                    <Footer nameFooter="chart" />
                </div>
            </div>

        </div>
    )
}
export default Chart
