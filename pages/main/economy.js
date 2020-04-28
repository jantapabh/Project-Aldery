import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import _ from 'lodash';
import Dashboard from '../../components/layout/dashboard';
import { useMediaQuery } from 'react-responsive';
import Empty from '../../components/Empty';

const BarEconomy = dynamic(
    () => import('../../components/chart/barEconomy'),
    { ssr: false }
)

const BarEconomy3 = dynamic(
    () => import('../../components/chart/barEconomy2'),
    { ssr: false }
)

const BarEconomy2 = dynamic(
    () => import('../../components/chart/barEconomy3'),
    { ssr: false }
)

const PieEconomy = dynamic(
    () => import('../../components/chart/pieEconomy2'),
    { ssr: false }
)

const PieEconomy2 = dynamic(
    () => import('../../components/chart/pieEconomy3'),
    { ssr: false }
)

const Economy = () => {

    const isLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 768 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })

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
                                                    <h1 className="text-center">ข้อมูลด้านเศรษฐกิจ</h1>
                                                    <h2 className="small text-center">ของประชากรผู้สูงอายุ ภายในอำเภอกะทู้ จังหวัดภูเก็ต</h2>
                                                    {
                                                        isLaptop || isTablet ?
                                                            <div className="info-main">
                                                                <div className="warp-chart-main ">
                                                                    <div className="chart-row">
                                                                        <PieEconomy onToken={statusToken} />
                                                                        <BarEconomy />
                                                                    </div>
                                                                    <div className="chart-row">
                                                                        <PieEconomy2 />
                                                                        <BarEconomy2 />
                                                                    </div>

                                                                    <div className="chart-row">
                                                                        <BarEconomy3 />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            isMobile ?
                                                                <div className="info-main">
                                                                    <div className="warp-chart-main ">
                                                                        <div className="chart-col">
                                                                            <PieEconomy onToken={statusToken} />
                                                                            <BarEconomy />
                                                                            <PieEconomy2 />
                                                                            <BarEconomy2 />
                                                                            <BarEconomy3 />
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
export default Economy;
