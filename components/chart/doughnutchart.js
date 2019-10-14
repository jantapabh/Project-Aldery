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


class Doughnutchart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: [
          'อายุมากกว่าหรือเท่ากับ90ปี',
          'อายุ80ถึง89ปี',
          'อายุ70ถึง79ปี',
          'อายุ60ถึง69ปี',
          'อายุน้อยกว่า60ปี',
        ],


      },
    }
  }

  async componentDidMount() {

    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.list('ข้อมูลการวิเคราะห์ทางสถิติ!C14:C18')
  }

  list = async (value) => {

    try {

      this.list = await Sheetapi.getSheet(this.access_token, value)

      for (let i = 0; i < this.list.length; i++) {
        const datasets = await [{
          data: [this.list[i][0], this.list[i][0], this.list[i][0], this.list[i][0], this.list[i][0]],
          borderColor: ["#0693e3", "#ff6384", "#ffc107", "#ba68c8", "#00d084"],
          backgroundColor: ["#0693e3", "#ff6384", "#ffc107", "#ba68c8", "#00d084"],

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
      <React.Fragment>
        <Doughnut
          data={data}
          legend={legend}
          width={400}
          height={150}
          options={{ maintainAspectRatio: false,responsive:false  }}
        />
      </React.Fragment>
    )
  }
}

export default Doughnutchart;