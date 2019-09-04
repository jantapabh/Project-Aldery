import React from 'react'
import Sheetapi from '../../config/api'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [{}]
class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            ar:[]
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('!B1:D')


    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheetValues(this.access_token, value)

        


            for(let i= 0 ; i<this.list.length ; i++){
                this.setState({
                    data: Object.assign({},this.list[i])  ,
                })

            }





        } catch (err) {
            console.log(err);
        }

    }

    render() {
console.log(this.state.data);

        return (
            <div className="warp-chart">
                <LineChart width={500} height={300} data={this.state.data}>
                    <CartesianGrid />


                    <XAxis dataKey="0" />

                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="ชาย60ปีขึ้นไป" stroke="#8884d8" />
                    <Line type="monotone" dataKey="หญิง60ปีขึ้นไป" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    }
}

export default Chart;