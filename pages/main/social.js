import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
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
                                                    <h1 className="text-center">ข้อมูลด้านสังคม</h1>
                                                    <h2 className="small text-center">ของประชากรผู้สูงอายุ ภายในอำเภอกะทู้ จังหวัดภูเก็ต</h2>

                                                    {
                                                        isLaptop ?
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
                                                            :
                                                            isTablet ?
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
                                                                :
                                                                isMobile ?
                                                                    <div className="info-main">
                                                                        <div className="warp-chart-main ">
                                                                            <div className="chart-col">
                                                                                <DonutSocial onToken={statusToken} />
                                                                                <BarSocial />
                                                                                <PieSocial />
                                                                                <PieSocial2 />
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
export default Social;
