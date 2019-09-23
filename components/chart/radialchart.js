import React from 'react'
import Sheetapi from '../../config/api'
import { Doughnut } from 'react-chartjs-2';

const legend = {
  "display": true,
  "position": "left",
  "fullWidth": true,
  "reverse": true,
  "labels": {
    // "fontColor": "rgb(255, 99, 132)",
    "fontFamily": "Prompt, sans-serif"
  }
}


class Radialchart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: [
          'อายุ60ถึง69ปี',
          'อายุ70ถึง79ปี',
          'อายุ80ถึง89ปี',
          'อายุมากกว่าหรือเท่ากับ90ปี',
        ],


      },
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
        const value = await {
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

        const datasets = await [{
          data: [value.อายุ60ถึง69ปี, value.อายุ70ถึง79ปี, value.อายุ80ถึง89ปี, value.อายุมากกว่าหรือเท่ากับ90ปี],
          borderColor: ["#0693e3", "#ff6384", "#ffc107", "#ba68c8"],
          backgroundColor: ["#0693e3", "#ff6384", "#ffc107", "#ba68c8"],

        }]


        this.setState(prevState => ({
          data: { ...prevState.data, datasets }

        }))
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {


    const { data } = this.state

    return (
        <div className="chart-main">
          <Doughnut
            data={data}
            legend={legend}
            options={{ maintainAspectRatio: false }}
          />
        </div>
    )
  }
}

export default Radialchart;