import React from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'


class Barchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      datalist: [],
      series: [],
      dataMan: [],
      dataWoman: [],

    }
  }

  async componentDidMount() {
    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!H11:H16')
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
          title: {
            text: 'สถานภาพ',
            align: 'left'
          },
          chart: {
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },

          xaxis: {
            categories: this.state.datalist,
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          },
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

      this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!J11:J16')
      this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!K11:K16')

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
        series: [{ name: "เพศชาย", data: this.state.dataMan }, { name: "เพศหญิง", data: this.state.dataWoman }],
      })

    } catch (err) {
      console.log(err);
    }

  }


  render() {
    return (
      <React.Fragment>
        {/* <div className="warp-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="285"
            width="600"
          />
        </div> */}

        <div className="warp-chart-small">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="300"
            width="250"
          />
        </div>

        <div className="warp-chart-mobile">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="200"
            width="450"
          />
        </div>

        <div className="warp-chart-tablets">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="220"
            width="500"
          />
        </div>

        <div className="warp-chart-desktops">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="245"
            width="550"
          />
        </div>

        <div className="warp-chart-large">
          <h1>Large</h1>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar" height="285"
            width="600"
          />
        </div>


      </React.Fragment>

    )
  }
}
export default Barchart;