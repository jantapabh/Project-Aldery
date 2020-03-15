import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useMediaQuery } from 'react-responsive';
import Dashboard from '../components/layout/dashboard';
import Map from '../components/layout/Map';
import Empty from '../components/Empty';

const BarMap = dynamic(
    () => import('../components/chart/barMap'),
    { ssr: false }
)

const Barchart = dynamic(
    () => import('../components/chart/barChart'),
    { ssr: false }
)

const Piechart = dynamic(
    () => import('../components/chart/pieChart'),
    { ssr: false }
)

const Piechart2 = dynamic(
    () => import('../components/chart/pieChart2'),
    { ssr: false }
)

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const MainPage = () => {
    const classes = useStyles();
    const isLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isTablet = useMediaQuery({ minWidth: 768 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })

    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(0);

    const [status, setStatus] = useState(false)
    const [userOauth, setUserOauth] = useState()
    const [tokenError, setTokenError] = useState(false)

    useEffect(() => {
        fetchData()

        function progress() {
            setCompleted(oldCompleted => {
                if (oldCompleted === 100) {
                    return 0;
                }
                const diff = Math.random() * 20;
                return Math.min(oldCompleted + diff, 100);
            });
        }

        const timer = setInterval(progress, 500);
        return () => {
            clearInterval(timer);
            setTimeout(() => {
                setLoading(false);
            }, isLaptop ? 5000 : isTablet ? 4990 : isMobile ? 4300 : 0)
        };
    }, []);

    const fetchData = async () => {
        setUserOauth(await JSON.parse(localStorage.getItem("myOauth")))
    }

    const statusMain = (order) => {
        setStatus(order)
    }

    const statusToken = (token) => {
        setTokenError(token)
    }

    return (
        <React.Fragment>
            <Head>
                <title>Eldery Dashboard</title>
                <link rel='icon' href='/static/logomain.svg' />
            </Head>
            <div className="warp-main">
                {
                    loading ?
                        <div className={classes.root} >
                            <LinearProgress variant="determinate" value={completed} />
                        </div >
                        :
                        userOauth != null && !tokenError ?
                            <React.Fragment>
                                <Dashboard onStatusMain={statusMain} statusMain={status} />
                                <div className="page-content-main">
                                    <div className="container-fluid-main">
                                        <h1 className="text-center">ผู้สูงอายุ</h1>
                                        <h2 className="small text-center">อำเภอกะทู้ จังหวัดภูเก็ต</h2>
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
                                                    isMobile?
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
                            <React.Fragment>
                                <Empty />
                            </React.Fragment>
                }
            </div >
        </React.Fragment>
    )
}
export default MainPage;