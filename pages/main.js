import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Map from '../components/layout/Map';
import Navbar_main from '../components/nav_main';
import Sidebar from '../components/layout/sidebar';

const BarMap = dynamic(
    () => import('../components/chart/barMap'),
    { ssr: false }
)

const Main = () => {

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
                        <h1 className="text-center">สังคมผู้สูงอายุ</h1>
                        <h2 className="small text-center"></h2>
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
        </div>
    )
}
export default Main;