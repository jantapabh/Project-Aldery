import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Map from '../components/layout/Map';
import Navbar_main from '../components/nav_main';
import Sidebar from '../components/layout/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const BarMap = dynamic(
    () => import('../components/chart/barMap'),
    { ssr: false }
)

const Main = () => {
    const classes = useStyles();
    const isBigScreen = useMediaQuery({ minDeviceWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxWidth: 576 })
    const [loading, setLoading] = useState(true)
    const [completed, setCompleted] = useState(0);
    const [status, setStatus] = useState(true)

    const onConfirm = (order) => {
        setStatus(order)
    }

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
            }, isBigScreen ? 5000 : isMobile ? 4990 :isSmallScreen ? 4300 : 0)
        };
    });


    return (
        <div className="warp-main">
            {
                loading ?
                    <div className={classes.root} >
                        <LinearProgress variant="determinate" value={completed} />
                    </div >

                    :
                    <React.Fragment>
                        <Navbar_main confirm={onConfirm} status={status} />
                        <Sidebar status={status} />
                           
                    </React.Fragment>
            }
        </div >


    )
}
export default Main;