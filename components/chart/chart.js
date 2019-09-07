import React from 'react';
import Sheetapi from '../../config/api'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar,
} from 'recharts';
import Barchart from './barchart';
import Linechart from './linechart';

class Chart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataAge: [],
            dataGender: []
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        //  await this.list('!D2:L')
    }

    list = async (value) => {

        try {

                this.list = await Sheetapi.getSheet2(this.access_token, value)
    
                for (let i = 0; i < this.list.length; i++) {
                    let value = await {
                        ชาย: parseInt(this.list[i][6].replace(",", "")),
                        หญิง: parseInt(this.list[i][7].replace(",", "")),
                        รวม: parseInt(this.list[i][8].replace(",", "")),
                    }
                    this.setState(prevState => ({
                        dataGender: [...prevState.data, value]
                    }))
            }
  
    } catch(err) {
        console.log(err);
    }

}


render() {
    const { dataAge, dataGender } = this.state
    return (
          
                <div className="card-chart">
                   <Barchart/>
                </div>
            

        

    )
}
}
export default Chart;