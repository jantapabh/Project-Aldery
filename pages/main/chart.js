import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'
import Dashboard from '../../components/layout/dashboard';


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
                        <h1 className="text-center">ข้อมูลทางสถิติ</h1>
                        <h4 className="text-center">ของประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Chart
