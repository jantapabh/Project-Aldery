import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class Bar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [],
      categories: [],
      data: [],
      datalist: []
    }
  }

  async componentDidMount() {
    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.namelist('ข้อมูลการวิเคราะห์ทางสถิติ!N79:N86')
    await this.numberlist('ข้อมูลการวิเคราะห์ทางสถิติ!o79:o86')
  }

  namelist = async (value) => {

    try {

      this.list = await Sheetapi.getSheet(this.access_token, value)

      for (let i = 0; i < this.list.length; i++) {

        this.setState(prevState => ({
          datalist: [...prevState.datalist, this.list[i][0]],
        }))
      }

      this.setState({

        options: {
          plotOptions: {
            bar: { horizontal: true }
          },
          dataLabels: { enabled: false },
          xaxis: { categories: this.state.datalist }
        }

      })


    } catch (err) {
      console.log(err);
    }

  }

  numberlist = async (value) => {

    try {

      this.list = await Sheetapi.getSheet(this.access_token, value)

      for (let i = 0; i < this.list.length; i++) {


        this.setState(prevState => ({
          datalist: [...prevState.datalist, this.list[i][0]],
        }))
      }

      this.setState({
        series: [{ data: this.state.datalist }],
      })

    } catch (err) {
      console.log(err);
    }

  }

  render() {
    console.log("Series", this.state.series);


    return (
      <div className="warp-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar" width="700"
          height="350"
          width="700"
        />
      </div>
    );
  }
}

export default Bar;
