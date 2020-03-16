import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import _ from 'lodash';
import Dashboard from '../../components/layout/dashboard';
import { useMediaQuery } from 'react-responsive';
import Empty from '../../components/Empty';

const BarSocial = dynamic(
    () => import('../../components/chart/barSocial'),
    { ssr: false }
)

const PieSocial2 = dynamic(
    () => import('../../components/chart/pieSocial'),
    { ssr: false }
)

const PieSocial = dynamic(
    () => import('../../components/chart/pieSocial2'),
    { ssr: false }
)

const DonutSocial = dynamic(
    () => import('../../components/chart/donutSocial'),
    { ssr: false }
)


const Social = () => {

    const isLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 768 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })

    const [status, setStatus] = useState(false)
    const [tokenError, setTokenError] = useState(false)

    const statusMain = (order) => {
        setStatus(order)
    }

    const statusToken = (token) => {
        setTokenError(token)
    }

    return (
        <div className="warp-main">
            {

                !tokenError ?
                    <React.Fragment>
                        <Dashboard onStatusMain={statusMain} statusMain={status} />
                        <div className="page-content-main">
                            <div className="container-fluid-main">
                                <h1 className="text-center">ข้อมูลด้านสังคม</h1>
                                <h2 className="small text-center">ของประชากรผู้สูงอายุ ภายในอำเภอกะทู้ จังหวัดภูเก็ต</h2>

                                <div className="info-main">
                                    <div className="warp-chart-main ">
                                        <div className="chart-row">
                                            <DonutSocial onToken={statusToken} />
                                            <BarSocial />

                                        </div>

                                        <div className="chart-row">
                                            <PieSocial />
                                            <PieSocial2 />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                    :
                    <Empty />
            }
        </div>
    )
}
export default Social;
