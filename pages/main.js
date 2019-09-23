import React from 'react'
import '../styles/main.scss'
import Nav from '../components/nav';
import CardMain from '../components/layout/card-data';
import Radialchart from '../components/chart/RadialChart';


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

                    </div>
                    <div className="chart-content">

                    </div>
                </div>
            </div>
        )
    }
}
export default Main

//     < CardMain
// card = { this.state.card }
//     />

{/* <Radialchart /> */ }