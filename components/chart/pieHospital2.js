import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class PieHospital2 extends Component {

  constructor(props) {
    super(props);

    this.state = {

      options: {},
      datalist: [],
      series: [],
      data: [],
    }
  }


  async componentDidMount() {
    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!H67:H73')
    await this.listData()
  }

  listName = async (value) => {
    try {
      this.list = await Sheetapi.getSheet(this.access_token, value)
      for (let i = 0; i < this.list.length; i++) {

        this.setState(prevState => ({
          datalist: [...prevState.datalist, this.list[i][0]],
        }))
      }

      this.setState({
        options: {
          labels: this.state.datalist,
          title: { text: "สภาพความพิการ" },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " คน"
              }
            }
          }
        }
      })

    } catch (err) {
      console.log(err);
    }
  }

  listData = async () => {
    try {

      this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!I67:I73')

      for (let i = 0; i < this.list.length; i++) {

        this.setState(prevState => ({
          data: [...prevState.data, parseInt(this.list[i][0])],
        }))
      }

      this.setState({
        series: this.state.data,
      })

    } catch (err) {
      console.log(err);
    }

  }



  render() {

    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="pie"
        width="500"
        height="250"
      />
    );
  }
}

export default PieHospital2;