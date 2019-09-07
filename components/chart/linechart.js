import React from 'react'
import Sheetapi from '../../config/api'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Linechart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    async componentWillMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('!D2:L')
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
            <div>
                {
                    data ?

                        <div className="warp-chart">
                            <LineChart width={500} height={200} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="ชาย" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="หญิง" stroke="#8884d8" />
                            </LineChart>
                        </div>
                        : null
                }

            </div>
        )
    }
}

export default Linechart;