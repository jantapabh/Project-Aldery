import React from 'react'
import Sheetapi from '../../config/api'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Doughnutchart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentWillMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('!B5:G')
    }
    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet4(this.access_token, value)


            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ปี: this.list[i][0],
                    อายุ60ถึง64ปี: parseFloat(this.list[i][1]),
                    อายุ65ถึง69ปี: parseFloat(this.list[i][2]),
                    อายุ70ถึง74ปี: parseFloat(this.list[i][3]),
                    อายุ75ถึง79ปี: parseFloat(this.list[i][4]),
                    อายุ80ปีขึ้นไป: parseFloat(this.list[i][5]),

                }
                this.setState(prevState => ({
                    data: [...prevState.data, value],

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
                
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="ปี" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="อายุ60ถึง64ปี" stackId="a" fill="#194d33" />
                        <Bar dataKey="อายุ65ถึง69ปี" stackId="a" fill="#388e3c" />
                        <Bar dataKey="อายุ70ถึง74ปี" stackId="a" fill="#4caf50" />
                        <Bar dataKey="อายุ75ถึง79ปี" stackId="a" fill="#81c784" />
                        <Bar dataKey="อายุ80ปีขึ้นไป" stackId="a" fill="#c8e6c9" />
                    </BarChart>
            

            </div>
        )
    }
}
export default Doughnutchart;