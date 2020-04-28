import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import _ from 'lodash';
import { useMediaQuery } from 'react-responsive';
import Map from '../../components/layout/Map';
import Empty from '../../components/Empty';
import Dashboard from '../../components/layout/dashboard';


const BarMap = dynamic(
    () => import('../../components/chart/barMap'),
    { ssr: false }
)

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

const People = () => {
    const isLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 768 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })

        ;

    const [status, setStatus] = useState(false)
    const [userOauth, setUserOauth] = useState()
    const [tokenError, setTokenError] = useState(false)

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
                                                    <h1 className="text-center">ข้อมูลด้านทั่วไป</h1>
                                                    <h2 className="small text-center">ของประชากรผู้สูงอายุ ภายในอำเภอกะทู้ จังหวัดภูเก็ต</h2>
                                                    {
                                                        isLaptop ?

                                                            <div className="info-main">
                                                                <div className="warp-map">
                                                                    <Map onToken={statusToken} />
                                                                </div>
                                                                <div className="warp-chart-main">
                                                                    <div className="chart-row">
                                                                        <Piechart onToken={statusToken} />
                                                                        <Piechart2 />
                                                                    </div>
                                                                    <Barchart />
                                                                </div>
                                                            </div>
                                                            :
                                                            isTablet ?
                                                                <div className="info-main">
                                                                    <div className="warp-chart-main">
                                                                        <BarMap onToken={statusToken} />
                                                                        <div className="chart-row">
                                                                            <Piechart />
                                                                            <Piechart2 />
                                                                        </div>
                                                                        <Barchart />
                                                                    </div>
                                                                </div>
                                                                :
                                                                isMobile ?
                                                                    <div className="info-main">

                                                                        <div className="warp-chart-main">
                                                                            <BarMap onToken={statusToken} />
                                                                            <div className="chart-col">
                                                                                <Piechart onToken={statusToken} />
                                                                                <Piechart2 />
                                                                            </div>
                                                                            <Barchart />
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
                            </div >
                        </Dashboard>

                    </React.Fragment>
            }
        </React.Fragment>
    )
}
export default People;