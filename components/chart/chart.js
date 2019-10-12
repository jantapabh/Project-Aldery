import React from 'react';
import Sheetapi from '../../config/api'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('ข้อมูลทั่วไป!AN9:AO9')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    อำเภอ:"กะทู้",
                    เพศชาย: this.list[i][0],
                    เพศหญิง: this.list[i][1],

                }
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

        return (
            <div className="chart-main">

               

                    <BarChart
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

                    </BarChart>

            </div>


        )
    }
}
export default Chart;