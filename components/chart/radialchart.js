import React from 'react'
import Sheetapi from '../../config/api'
import { VictoryPie } from "victory";

import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'



class Radialchart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      ar: [],
    }
  }

  async componentDidMount() {

    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.list('!B2:D')
  }

  list = async (value) => {

    try {

      this.list = await Sheetapi.getSheet1(this.access_token, value)

      for (let i = 0; i < this.list.length; i++) {
        let value = await {
          name: this.list[i][0],
          ชาย60ปีขึ้นไป: parseInt(this.list[i][1].replace(",", "")),
          หญิง60ปีขึ้นไป: parseInt(this.list[i][2].replace(",", "")), fill: '#ffc658'
        }
        this.setState(prevState => ({
          data: [...prevState.data, value]
        }))
      }
    } catch (err) {
      console.log(err);
    }

  }

  render() {

    const { data } = this.state

    return (
      <div className="warp-chart">
        

{/* <LineChart data={{"2017-05-13": 2, "2017-05-14": 5,}} /> */}
<PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
      </div>
    )
  }
}

export default Radialchart;