import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

class Barchart_2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      datalist: [],
      series: [],
      dataMan:[],
      dataWoman:[],
    }
  }

  async componentDidMount() {
    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!N11:N19')
    await this.listData()
  }

  listName = async (value) => {
    try{
      this.list = await Sheetapi.getSheet(this.access_token, value)
      for (let i = 0; i < this.list.length; i++) {

        this.setState(prevState => ({
          datalist: [...prevState.datalist, this.list[i][0]],
        }))
      }
      console.log("datalist",this.state.datalist);
      

      this.setState({

        options: {
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '1px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          xaxis: { categories: this.state.datalist }
        }

      })

    }catch (err) {
      console.log(err);
    }
  }

  listData = async () => {
    try {

      this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!P11:P19')
      this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!Q11:Q19')

      for (let i = 0; i < this.man.length; i++) {

        this.setState(prevState => ({
          dataMan: [...prevState.dataMan, this.man[i][0]],
        }))
      }

      for (let i = 0; i < this.woman.length; i++) {

        this.setState(prevState => ({
          dataWoman: [...prevState.dataWoman, this.woman[i][0]],
        }))
      }

      this.setState({
        series: [{ name:"เพศชาย", data: this.state.dataMan },{ name:"เพศหญิง", data: this.state.dataWoman }],
      })

    } catch (err) {
      console.log(err);
    }

  }

  listWoman = async (value) => {
    try {
      this.list = await Sheetapi.getSheet(this.access_token, value)
      console.log(this.list);

    } catch (err) {
      console.log(err);
    }

  }

  render() {

    return (
      <div className="warp-chart">
        <Chart options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
          width="600" />
      </div>
    );
  }
}

export default Barchart_2;
