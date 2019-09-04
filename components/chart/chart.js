import React from 'react'
import Sheetapi from '../../config/api'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            ar: [],
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('!B2:D')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheetValues(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await { name: this.list[i][0], ชาย60ปีขึ้นไป: parseInt(this.list[i][1].replace(",", "")) , หญิง60ปีขึ้นไป: parseInt(this.list[i][2].replace(",", "")) }
                this.setState(prevState => ({
                    data: [...prevState.data, value]
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        
        const { data, isLoad } = this.state
        return (
            <div>
                {
                    data ?

                        <div className="warp-chart">
                            {/* <LineChart width={1000} height={500} data={data}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name" padding={{ left: 5, right: 5 }} />
                                <YAxis  dataKey="ชาย60ปีขึ้นไป" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="ชาย60ปีขึ้นไป" stroke="#8884d8" activeDot={{ r: 8 }}/>
                                <Line type="monotone" dataKey="หญิง60ปีขึ้นไป" stroke="#82ca9d" />
                            </LineChart> */}

                            <LineChart width={500} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="ชาย60ปีขึ้นไป" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="หญิง60ปีขึ้นไป" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                        : null
                }

                

            </div>
        )
    }
}

export default Chart;