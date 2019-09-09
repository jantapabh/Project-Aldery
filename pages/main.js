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
            { name: "card1", img: "/static/grandfather.svg", text: "เพศชาย" },
            { name: "card2", img: "/static/old-woman.svg", text: "เพศหญิง" },
            { name: "card3", img: "/static/couple.svg", text: "รวม" },]
    
        }
      }

    render() {
        return (
            <div className="warp-main">
              <Nav/>
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