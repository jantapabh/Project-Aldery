import React from 'react'
import Sheetapi from '../../config/api'
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
  } from 'recharts';
  import Chart from 'react-google-charts';

class Linechart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentWillMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('ข้อมูลทั่วไป!AP12:AQ16')
    }
    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet(this.access_token, value)
            this.c = ["< 60 ปี", "60 - 69 ปี", "70 - 79 ปี", "80 - 89 ปี", ">= 90 ปี"]

            console.log("LIST", this.list);


            for (let i = 0; i < this.list.length; i++) {
                let data = await {
                    ช่วง: this.c[i],
                    ชาย: this.list[i][0],
                    หญิง: this.list[i][1],

                }
                this.setState(prevState => ({
                    data: [...prevState.data, data]
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        const { data } = this.state

        console.log("DATA", data);

        return (
            <div className="warp-chart">
                <div className="chart">
                    <ComposedChart
                        layout="vertical"
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="ช่วง" type="category" />
                        <Tooltip />
                        <Legend />
                        {/* <Area dataKey="ชาย" fill="#8884d8" stroke="#8884d8" /> */}
                        <Bar dataKey="ชาย" barSize={20} fill="#8884d8" />
                        <Bar dataKey="หญิง" barSize={20} fill="#413ea0" />
                    </ComposedChart>


                    <Chart
  width={'600px'}
  height={'400px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Day',
      'Guardians of the Galaxy',
      'The Avengers',
      'Transformers: Age of Extinction',
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ]}
  options={{
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)',
    },
  }}
  rootProps={{ 'data-testid': '3' }}
/>

                </div>


            </div>

        )
    }
}

export default Linechart;