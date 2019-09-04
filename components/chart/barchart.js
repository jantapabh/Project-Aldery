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
        await this.list('!B2:D')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheetValues(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await { name: this.list[i][0], ชาย60ปีขึ้นไป: parseInt(this.list[i][1].replace(",", "")), หญิง60ปีขึ้นไป: parseInt(this.list[i][2].replace(",", "")) }
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
                <BarChart
                    width={1250}
                    height={400}
                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ชาย60ปีขึ้นไป" fill="#8884d8" />
                    <Bar dataKey="หญิง60ปีขึ้นไป" fill="#82ca9d" />
                </BarChart>
            </div>
        )
    }
}

export default Barchart;