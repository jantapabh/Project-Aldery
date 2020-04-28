import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import _ from 'lodash';
import Dashboard from '../../components/layout/dashboard';
import { useMediaQuery } from 'react-responsive';
import Empty from '../../components/Empty';

const PieHelp = dynamic(
    () => import('../../components/chart/pieHelp'),
    { ssr: false }
)

const LineHelp = dynamic(
    () => import('../../components/chart/lineHelp'),
    { ssr: false }
)

const PieDoc = dynamic(
    () => import('../../components/chart/pieDoc'),
    { ssr: false }
)

const PieService = dynamic(
    () => import('../../components/chart/pieService'),
    { ssr: false }
)

const PieService2 = dynamic(
    () => import('../../components/chart/pieService2'),
    { ssr: false }
)

const Service = () => {

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

        <React.Fragment>
            {
                typeof document === 'undefined' ?
                    null :
                    <React.Fragment>
                        <Head>
                            <title>Eldery Dashboard</title>
                            <link rel='icon' href='/static/logomain.svg' />
                        </Head>
                        <Dashboard>
                            <div className="warp-main">
                                {
                                    !tokenError ?
                                        <React.Fragment>
                                            <div className="page-content-main">
                                                <div className="container-fluid-main">
                                                    <h1 className="text-center">หน่วยงานภาครัฐ</h1>
                                                    <h2 className="small text-center">สวัสดิการ การเข้าร่วมกิจกรรม และการช่วยเหลือ</h2>
                                                    {
                                                        isLaptop ?
                                                            <div className="info-main">
                                                                <div className="warp-chart-main ">
                                                                    <div className="chart-row">
                                                                        <PieHelp onToken={statusToken} />
                                                                        <LineHelp />
                                                                    </div>
                                                                    <div className="chart-row">
                                                                        <PieDoc />
                                                                        <PieService />
                                                                        <PieService2 />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            isTablet ?
                                                                <div className="info-main">
                                                                    <div className="warp-chart-main ">
                                                                        <div className="chart-row">
                                                                            <PieHelp onToken={statusToken} />
                                                                            <LineHelp />
                                                                        </div>
                                                                        <div className="chart-col">
                                                                            <PieDoc />
                                                                        </div>
                                                                        <div className="chart-row">
                                                                            <PieService />
                                                                            <PieService2 />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                :
                                                                isMobile ?
                                                                    <div className="info-main">
                                                                        <div className="warp-chart-main ">
                                                                            <div className="chart-col">
                                                                                <PieHelp onToken={statusToken} />
                                                                                <LineHelp />
                                                                                <PieDoc />
                                                                                <PieService />
                                                                                <PieService2 />
                                                                            </div>
                                                                            <div className="chart-row">

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    null
                                                    }
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        :
                                        <Empty />
                                }
                            </div>
                        </Dashboard>

                    </React.Fragment>
            }
        </React.Fragment>
    )
}
export default Service
