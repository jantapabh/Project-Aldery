import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'
import Dashboard from '../../components/layout/dashboard';


const PieService = dynamic(
    () => import('../../components/chart/pieService'),
    { ssr: false }
)

const PieService2 = dynamic(
    () => import('../../components/chart/pieService2'),
    { ssr: false }
)

const Service = () => {

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
                        <h1 className="text-center">หน่วยงานเเละการบริการ</h1>
                        <h4 className="text-center">ของประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
                        <h2 className="small text-center"></h2>
                        <div className="warp-chart">
                            <div className="chart-pic">
                                <PieService />
                            </div>
                            <div className="chart-pic">
                                <PieService2 />
                            </div>
                        </div>
                        <Footer nameFooter="service" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Service
