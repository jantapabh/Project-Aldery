import React from 'react'
import Sheetapi from '../../config/api'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
        await this.list('!B11:C14')
    }
    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet4(this.access_token, value)


            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    จังหวัด: this.list[i][0],
                    อัตราผู้สูงอายุ: parseInt(this.list[i][1].replace(",", "")),

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
            <div>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="จังหวัด" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="อัตราผู้สูงอายุ" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>

            </div>
        )
    }
}
export default Doughnutchart;