import React from 'react';
import Sheetapi from '../../config/api'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import Chart from 'react-google-charts';

const dataMain=[
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350],
]


class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                ["สถานภาพการรับสวัสดิการจากรัฐ","เพศชาย","เพศหญิง"],
            ],
            options:{
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },
            }
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('ข้อมูลทั่วไป!AY8:BB16')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await [
                    this.list[i][0],
                    parseInt(this.list[i][2]) ,
                    parseInt(this.list[i][3]) ,

                ]
                this.setState(prevState => ({
                    data: [...prevState.data, value]
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        const { data } = this.state

        console.log("DATAMAIN:",dataMain);
        

        console.log("DATA",data);
        

        return (
            <div className="chart-main">

               

                    {/* <BarChart
                        width={300}
                        height={250}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="อำเภอ" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="เพศชาย" fill="#0288d1" />
                        <Bar dataKey="เพศหญิง" fill="#03a9f4" />

                    </BarChart> */}

                    <Chart
                        width={'700px'}
                        height={'350px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Year', 'Sales', 'Expenses', 'Profit'],
                            ['2014', 1000, 400, 200],
                            ['2015', 1170, 460, 250],
                            ['2016', 660, 1120, 300],
                            ['2017', 1030, 540, 350],
                        ]}
                        options={this.state.options}
                        // For tests
                        rootProps={{ 'data-testid': '2' }}
                    />

{/* <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={data}
                        options={this.state.options}
                        // For tests
                        rootProps={{ 'data-testid': '2' }}
                    /> */}

            </div>


        )
    }
}
export default Charts;