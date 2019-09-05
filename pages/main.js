import React from 'react'
import Barchart from '../components/chart/barchart';
import '../styles/base.scss'
import Chart from '../components/chart/chart';
import Radialchart from '../components/chart/radialchart';

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="warp-main">
                    <h2>จำนวนประชากรผู้สูงอายุของ 14 จังหวัดภาคใต้</h2>
                </div>

                <Chart />
                <Barchart />
                {/* <Radialchart/> */}


            </div>
        )
    }
}
export default Main