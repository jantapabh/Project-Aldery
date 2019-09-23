import React from 'react'
import Nav from '../components/nav';
import Radialchart from '../components/chart/radialchart';
import SideBar from '../components/layout/sidebar';
import Barchart from '../components/chart/barchart';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className="warp-main">
                <Nav />
                <div className="main">
                    <SideBar />
                    <div class="content-chart">
                        <Radialchart />
                        <Barchart/>
                    </div>
                    <div class="content-chart">
                       
                        
                    </div>

                </div>




            </div>
        )
    }
}
export default Main
