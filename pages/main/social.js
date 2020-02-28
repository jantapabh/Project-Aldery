import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'
import Dashboard from '../../components/layout/dashboard';

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

const Social = () => {
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
                        <h1 className="text-center">สภาพทางสังคม</h1>
                        <h4 className="text-center">ของประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
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
                        <Footer nameFooter="social" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Social;
