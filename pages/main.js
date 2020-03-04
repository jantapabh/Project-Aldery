import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useMediaQuery } from 'react-responsive';
import Dashboard from '../components/layout/dashboard';

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
                        <div className={`wrapper${status ? " menuDisplayed" : ""}`}>
                            <div className="page-content-wrapper">
                                <div className="container-fluid">
                                    <h1 className="text-center">สังคมผู้สูงอายุ</h1>
                                    <h2 className="small text-center">ประชากรผู้สูงอายุภายในจังหวัดภูเก็ต</h2>
                                    <div className="warp-map">
                                        <div className="map-Img">
                                            <div class="card bg-while mb-3">
                                                <div class="card-header">จำนวนประชากรสูงอายุ 60 ปี ขึ้นไป</div>
                                                <div class="card-body">
                                                    <h1 class="card-title"><CountUp end={11} /> %</h1>
                                                    <div class="card-footer bg-transparent ">ณ วันที่ 31 ธันวาคม 2562</div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="warp-map">
                                        <div className="map-Img">
                                            <div class="card bg-light mb-3">
                                                <div class="card-header">จำนวนประชากรสูงอายุ ที่ได้รับเบี้ยยังชีพ</div>
                                                <div class="card-body-text">
                                                    <h1 class="card-title">9,792 คน</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="map-Img">
                                            <div class="card bg-light mb-3">
                                                <div class="card-header">จำนวนประชากรสูงอายุ ที่ได้รับเบี้ยยังชีพผู้พิการ</div>
                                                <div class="card-body-text">
                                                    <h1 class="card-title">575 คน</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="map-Img">
                                            <div class="card bg-light mb-3">
                                                <div class="card-header">จำนวนประชากรสูงอายุ ที่ไม่มีชื่อในทะเบียน</div>
                                                <div class="card-body-text">
                                                    <h1 class="card-title">6 คน</h1>
                                                </div>
                                            </div>
                                        </div>
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