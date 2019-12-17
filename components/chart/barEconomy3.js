import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class BarEconomy extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [],
      dataList: [],
      dataName: []
    }
  }

  async componentDidMount() {
    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.namelist('ข้อมูลการวิเคราะห์ทางสถิติ!T47:T49')
    await this.numberlist('ข้อมูลการวิเคราะห์ทางสถิติ!U47:U49')
  }

  namelist = async (value) => {

    try {

      this.list = await Sheetapi.getSheet(this.access_token, value)

      for (let i = 0; i < this.list.length; i++) {

        this.setState(prevState => ({
          dataName: [...prevState.dataName, this.list[i][0]],
        }))
      }

      this.setState({

        options: {
          title: {
            text: 'รายจ่าย',
            align: 'left'
          },
          plotOptions: {
            bar: { horizontal: true }
          },
          responsive: [{
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
              legend: {
                position: "bottom"
              }
            }
          }],
          dataLabels: { enabled: false },
          xaxis: {
            categories: this.state.dataName,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " คน"
              }
            }
          },
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
          dataList: [...prevState.dataList, parseInt(this.list[i][0])],
        }))
      }

      this.setState({
        series: [{ name: "จำนวน", data: this.state.dataList }],
      })

    } catch (err) {
      console.log(err);
    }

  }

  render() {

    return (
      <React.Fragment>
        <div className="warp-chart-small">
          <Chart options={this.state.options}
            series={this.state.series}
            type="bar"
            height="300"
            width="325"
          />
        </div>

        <div className="warp-chart-mobile">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="350"
            width="450"
          />
        </div>

        <div className="warp-chart-tablets">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="300"
            width="450"
          />
        </div>

        <div className="warp-chart-desktops">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="245"
            width="500"
          />
        </div>

        <div className="warp-chart-large">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="400"
            width="500"
          />
        </div>
      </React.Fragment>

    );
  }
}

export default BarEconomy;
