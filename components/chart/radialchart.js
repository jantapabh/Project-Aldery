import React from 'react'
import Sheetapi from '../../config/api'
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};



class Radialchart extends React.Component {

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
        let value = await { name: this.list[i][0], ชาย60ปีขึ้นไป: parseInt(this.list[i][1].replace(",", "")), หญิง60ปีขึ้นไป: parseInt(this.list[i][2].replace(",", "")),fill: '#ffc658' }
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
        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
          <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="ชาย60ปีขึ้นไป" />
          <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </div>
    )
  }
}

export default Radialchart;