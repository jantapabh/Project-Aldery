import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class PieEconomy extends Component {
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
    await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B28:B36')
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
          title: { text: "การศึกษา" },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 290
              },
              legend: {
                position: 'bottom'
              },
              dataLabels: { enabled: false },
            }
          }],

          tooltip: {
            y: {
              formatter: function (val) {
                return val + " คน"
              }
            }
          },

          colors: ['#8ed1fc', '#7bdcb5', '#d3b3e5',
            '#ffd54f', '#ff8a65', '#90a4ae',
            '#7986cb', '#ffe0b2', '#eb9694',]
        }
      })

    } catch (err) {
      console.log(err);
    }
  }

  listData = async () => {
    try {

      this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C28:C36')

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
      <React.Fragment>
        <div className="warp-chart-small">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="300"
            height="350"
          />
        </div>

        <div className="warp-chart-mobile">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="450"
            height="300"
          />
        </div>

        <div className="warp-chart-tablets">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="450"
            height="300"
          />
        </div>

        <div className="warp-chart-desktops">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="450"
            height="300"
          />
        </div>

        <div className="warp-chart-large">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width="450"
            height="300"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PieEconomy;
