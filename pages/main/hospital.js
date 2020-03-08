import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../components/layout/footer';
import _ from 'lodash'
import Dashboard from '../../components/layout/dashboard';


const PieHospital = dynamic(
    () => import('../../components/chart/piehospital'),
    { ssr: false }
)

const PieHospital2 = dynamic(
    () => import('../../components/chart/pieHospital2'),
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

const BarHospital3 = dynamic(
    () => import('../../components/chart/barHospital3'),
    { ssr: false }
)

const BarHospital4 = dynamic(
    () => import('../../components/chart/barHospital4'),
    { ssr: false }
)

const Hospital = () => {

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
                            <h1 className="text-center">โรงพยาบาลเเละการดูแลรักษา</h1>
                            <h4 className="text-center">ประชากรผู้สูงอายุภายในตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
                            <h2 className="small text-center"></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default Hospital;