import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'
import Dashboard from '../../components/layout/dashboard';


const PieDoc = dynamic(
    () => import('../../components/chart/pieDoc'),
    { ssr: false }
)

const Doc = () => {

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
                        <h1 className="text-center">สวัสดิการจากรัฐ</h1>
                        <h4 className="text-center">ของประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
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
export default Doc

