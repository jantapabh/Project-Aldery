import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useMediaQuery } from 'react-responsive';
import Dashboard from '../components/layout/dashboard';
import Map from '../components/layout/Map';
import _ from 'lodash'

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
    const isBigScreen = useMediaQuery({ minDeviceWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxWidth: 576 })
    const isShowMap = useMediaQuery({ minDeviceWidth: 1224 })
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(0);

    const [status, setStatus] = useState(false)

    useEffect(() => {
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
            }, isBigScreen ? 5000 : isMobile ? 4990 : isSmallScreen ? 4300 : 0)
        };
    });

    const statusMain = (order) => {
        setStatus(order)
    }


    return (
        <div className="warp-main">
            {
                loading ?
                    <div className={classes.root} >
                        <LinearProgress variant="determinate" value={completed} />
                    </div >
                    :
                    <React.Fragment>
                        <Dashboard onStatusMain={statusMain} statusMain={status} />
                        <div className="page-content-main">
                            <div className="container-fluid-main">
                                <h1 className="text-center">ผู้สูงอายุ</h1>
                                <h2 className="small text-center">อำเภอกะทู้ จังหวัดภูเก็ต</h2>
                                <div className="info-main">
                                    <div className="warp-map">
                                        <Map />
                                    </div>
                                    <div className="warp-chart-main">
                                        <div className="chart-row">
                                            <Piechart />
                                            <Piechart2 />
                                        </div>
                                        <Barchart />
                                    </div>

                                </div>



                            </div>
                        </div>
                    </React.Fragment>
            }
        </div >


    )
}
export default MainPage;