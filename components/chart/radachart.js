import React from 'react'
import Chart from "react-apexcharts";
import Sheetapi from '../../config/api'

class RadarChart extends React.Component {
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
    await this.listName('ข้อมูลการวิเคราะห์ทางสถิติ!N11:N16')
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
              chart: {
                dropShadow: {
                  enabled: true,
                  blur: 1,
                  left: 1,
                  top: 1
                },
              },
              labels: this.state.datalist,
              title: {
                text: 'Radar Chart - Multi Series'
              },
              stroke: {
                width: 0
              },
              fill: {
                opacity: 0.4
              },
              markers: {
                size: 0
              }
            }
        })

    } catch (err) {
        console.log(err);
    }
}

listData = async () => {
    try {

      this.man = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!P11:P16')
      this.woman = await Sheetapi.getSheet(this.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!Q11:Q16')

      for (let i = 0; i < this.man.length; i++) {

        this.setState(prevState => ({
          dataMan: [...prevState.dataMan, parseInt(this.man[i][0]) ],
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


    render() {
        return (
            <div className="chart-center">

                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="radar"
                    height="350"
                />
            </div>
        )
    }
}
export default RadarChart;