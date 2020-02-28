import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'
import Dashboard from '../../components/layout/dashboard';

const Linechart = dynamic(
    () => import('../../components/chart/lineHelp'),
    { ssr: false }
)

const Piechart = dynamic(
    () => import('../../components/chart/pieHelp'),
    { ssr: false }
)

const Help = () => {

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
                        <h1 className="text-center">การช่วยเหลือของหน่วยงานภาครัฐ</h1>
                        <h4 className="text-center">ของประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
                        <div className="warp-chart">
                            <div className="chart-contents">
                                <Piechart />
                            </div>
                            <div className="chart-contents">
                                <Linechart />
                            </div>
                        </div>
                        <Footer nameFooter="help" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help

