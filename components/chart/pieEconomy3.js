import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class PieEconomy3 extends Component {
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
    await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!T53:T54')
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
            title: { text: "การออม" },
            plotOptions: {
                radialBar: {
                  offsetY: -5,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
  
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
              labels: this.state.datalist,
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 10,
                offsetY: 70,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0
                },
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + " คน "
                },
                itemMargin: {
                    horizontal: 1,
                }
              },
              responsive: [{
                  breakpoint: 480,
                  options: {
                      legend: {
                          show: false
                      }
                  }
              }]
        }
      })

    } catch (err) {
      console.log(err);
    }
  }

  listData = async () => {
    try {

      this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!U53:U54')

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
        type="radialBar" 
        height="350"
        width="400"
      />
    );
  }
}

export default PieEconomy3;
