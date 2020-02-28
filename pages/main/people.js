import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Map from '../../components/layout/Map';
import Dashboard from '../../components/layout/dashboard';


const BarMap = dynamic(
    () => import('../../components/chart/barMap'),
    { ssr: false }
)

const People = () => {

    const [status, setStatus] = useState(false)

    const statusMain = (order) => {
        setStatus(order)
    }

    return (
        <div className="warp-main">
            <React.Fragment>
                <Dashboard onStatusMain={statusMain} statusMain={status} />
                <div className={`wrapper${status ? " menuDisplayed" : ""}`}>
                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">จำนวนประชากรผู้สูงอายุ</h1>
                            <h2 className="small text-center">ภายในจังหวัดภูเก็ต โดยเเบ่งตามตำบลที่อยู่อาศัย</h2>
                            <div className="warp-map">
                                <div className="map-Img">
                                    <Map />
                                </div>

                                <div className="map-content">
                                    <BarMap />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        </div >
    )
}
export default People;