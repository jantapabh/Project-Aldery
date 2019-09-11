import React from 'react'
import '../styles/main.scss'
import Nav from '../components/nav';
import Card from '../components/layout/card';
import Chart from '../components/chart/chart';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: [
                { name: "card1", img: "/static/grandfather.svg", text: "เพศชาย", url: "/man", hover: "one" },
                { name: "card2", img: "/static/old-woman.svg", text: "เพศหญิง", url: "/woman", hover: "two" },
                { name: "card3", img: "/static/couple.svg", text: "รวม", url: "/total", hover: "three" },]

        }
    }

    render() {
        return (
            <div className="warp-main">
                <Nav />
                <div className="content-main">
                    <Card
                        card={this.state.card}
                    />

                    <Chart />
                </div>


            </div>
        )
    }
}
export default Main