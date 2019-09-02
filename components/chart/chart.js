import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';


const data = [
    {
        name: '2550', uv: 4000, pv: 2400, amt: 50,
    },
    {
        name: '2551', เพศชาย: 120, เพศหญิง: 1398, amt: 100,
    },
    {
        name: '2552', เพศชาย: 2000, เพศหญิง: 9800, amt: 2290,
    },
    {
        name: '2553', เพศชาย: 2780, เพศหญิง: 3908, amt: 2000,
    },
    {
        name: '2554', เพศชาย: 1890, เพศหญิง: 4800, amt: 2181,
    },
    {
        name: '2555', เพศชาย: 2390, เพศหญิง: 3800, amt: 2500,
    },
    {
        name: '2556', เพศชาย: 3490, เพศหญิง: 4300, amt: 2100,
    },
];


class Chart extends React.Component {
    render() {
        return (
            <div className="warp-chart">
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="เพศชาย" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="เพศหญิง" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    }
}

export default Chart;