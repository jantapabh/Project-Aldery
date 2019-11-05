import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class Picchart_2 extends Component {

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
    await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!B159:B167')
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
          }]
        }
      })

    } catch (err) {
      console.log(err);
    }
  }

  listData = async () => {
    try {

      this.list = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C159:C167')

      for (let i = 0; i < this.list.length; i++) {

        this.setState(prevState => ({
          data: [...prevState.data, parseInt(this.list[i][0]) ],
        }))
      }


console.log("DATA:::" , this.state.data);

      

      this.setState({
        series: this.state.data ,
      })

    } catch (err) {
      console.log(err);
    }

  }



  render() {

    return (
      // <div className="chart-center">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="450"
          height="300"
        />
      // </div>
    );
  }
}

export default Picchart_2;
