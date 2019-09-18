import React from 'react';
import Sheetapi from '../../config/api'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
        await this.list('โรคที่พบบ่อย!A4:E')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet3(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    โรค: this.list[i][1],
                    เพศชาย: this.list[i][2],
                    เพศหญิง: this.list[i][3],
                    
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
        <div className="warp-chart">

        <div className="chart">
            <BarChart
                width={500}
                height={250}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="โรค" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="เพศชาย" fill="#0288d1" />
                <Bar dataKey="เพศหญิง" fill="#03a9f4" />

            </BarChart>
        </div>
      
    </div>


    )
}
}
export default Chart;