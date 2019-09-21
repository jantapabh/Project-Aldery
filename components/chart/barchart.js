import React from 'react'
import sheetList from '../../config/Sheets'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Barchart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    async componentDidMount() {

        const access_token = await sheetList.Sheet()
        const list = await sheetList.List2(access_token, 'sheets!D2:P2')

        this.setState(prevState => ({
            data: [...prevState.data, list]
        }))

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