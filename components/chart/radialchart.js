import React from 'react'
import Sheetapi from '../../config/api'
import { VictoryChart, VictoryArea } from "victory";

import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'

let sampleData = [
  {
    value: 50,
    label: 'Marketing',
    color: 'red',
  }, {
    value: 40,
    label: 'Sales',
    color: 'blue'
  }, {
    value: 25,
    label: 'Support',
    color: 'green'
  }

]

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
    await this.list('sheets!D2:L2')
  }

  list = async (value) => {

    try {

      this.list = await Sheetapi.getSheet2(this.access_token, value)

      for (let i = 0; i < this.list.length; i++) {
        this.value = await {
          name: this.list[i][0],
          อายุ60ถึง69ปี: parseInt(this.list[i][1].replace(",", "")),
          อายุ60ถึง69ปีร้อยละ: parseFloat(this.list[i][2].replace(",", "")),
          อายุ70ถึง79ปี: parseInt(this.list[i][3].replace(",", "")),
          อายุ70ถึง79ปีร้อยละ: parseFloat(this.list[i][4].replace(",", "")),
          อายุ80ถึง89ปี: parseInt(this.list[i][5].replace(",", "")),
          อายุ80ถึง89ปีร้อยละ: parseFloat(this.list[i][6].replace(",", "")),
          อายุมากกว่าหรือเท่ากับ90ปี: parseInt(this.list[i][7].replace(",", "")),
          อายุมากกว่าหรือเท่ากับ90ปีร้อยละ: parseFloat(this.list[i][8].replace(",", "")),
        }
        this.setState(prevState => ({
          data: [...prevState.data, [{ value }]],
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
        {/* <VictoryChart
        >
          <VictoryArea
            data={data}
          />
        </VictoryChart> */}
      </div>
    )
  }
}

export default Radialchart;