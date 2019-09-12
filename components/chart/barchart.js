import React from 'react'
import Sheetapi from '../../config/api'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Barchart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('sheets!D2:L')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet2(this.access_token, value)
            

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    name: this.list[i][0],
                    อายุ60ถึง69ปี: parseInt(this.list[i][1].replace(",", "")),
                    อายุ70ถึง79ปี: parseInt(this.list[i][2].replace(",", "")),
                    อายุ80ถึง89ปี: parseInt(this.list[i][3].replace(",", "")),
                    อายุมากกว่าหรือเท่ากับ90ปี: parseInt(this.list[i][4].replace(",", "")),
                    รวม: parseInt(this.list[i][5].replace(",", "")),
                    ชาย: parseInt(this.list[i][6].replace(",", "")),
                    หญิง: parseInt(this.list[i][7].replace(",", "")),
                    รวม: parseInt(this.list[i][8].replace(",", "")),
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
                        width={400}
                        height={250}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ชาย" fill="#0288d1" />
                        <Bar dataKey="หญิง" fill="#03a9f4" />

                    </BarChart>
                </div>
                <div className="chart">
                    <BarChart
                        width={400}
                        height={250}
                        data={data}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="อายุ60ถึง69ปี" fill="#0288d1" />
                        <Bar dataKey="อายุ70ถึง79ปี" fill="#03a9f4" />
                        <Bar dataKey="อายุ80ถึง89ปี" fill="#4fc3f7" />
                        <Bar dataKey="อายุมากกว่าหรือเท่ากับ90ปี" fill="#b3e5fc" />
                    </BarChart>
                </div>
            </div>
        )
    }
}

export default Barchart;