import React from 'react'
import '../styles/main.scss'
import Nav from '../components/nav';
import Card from '../components/layout/card-data';
import Barchart from '../components/chart/barchart';
import StackedBarChart from '../components/chart/StackedBarChart';
import Radialchart from '../components/chart/RadialChart';
import Linechart from '../components/chart/linechart';
import GeoChart from '../components/chart/Geo'

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: [
                { name: "card1", img: "/static/grandfather.svg", text: "เพศชาย", url: "/mantable", hover: "one" },
                { name: "card2", img: "/static/old-woman.svg", text: "เพศหญิง", url: "/womantable", hover: "two" },
                { name: "card3", img: "/static/couple.svg", text: "รวม", url: "/totaltable", hover: "three" },]
        }
    }

    render() {
        return (
            <div className="warp-main">
                <Nav />
                <div className="main">
                    <div className="tab-main">
                        <Radialchart/>
                    </div>
                        <div className="card-content">
                            <Card
                                card={this.state.card}
                            />
        
                        </div>





                </div>


            </div>
        )
    }
}
export default Main