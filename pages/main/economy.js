import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'
import Dashboard from '../../components/layout/dashboard';


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


const Economy = () => {

    const [status, setStatus] = useState(false)

    const statusMain = (order) => {
        setStatus(order)
    }

    return (
        <div className="warp-main">
            <Dashboard onStatusMain={statusMain} statusMain={status} />
            <div className={`wrapper${status ? " menuDisplayed" : ""}`}>
                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <h1 className="text-center">ด้านเศรษฐกิจ</h1>
                        <h4 className="text-center">ของประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>

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
                        <Footer nameFooter="economy" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Economy;
