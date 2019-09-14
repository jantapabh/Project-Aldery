import React from 'react'
import IconData from './icon-data';
import Sheetapi from '../../config/api'


class Cover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: [
                { label: "อายุ60ถึง69ปี", color: "#f44336" },
                { label: "อายุ70ถึง79ปี", color: "#ffc107" },
                { label: "อายุ80ถึง89ปี", color: "#00d084" },
                { label: "อายุมากกว่าหรือเท่ากับ90ปี", color: "#0693e3" }
            ],
            data: []
        }
    }

    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))

        this.access_token = userOauth.data.access_token
        await this.list('sheets!D2:L2')


    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet2(this.access_token, value)
            console.log("LIst:", this.list);


            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    name: this.list[i][0],
                    อายุ60ถึง69ปี: parseInt(this.list[i][1].replace(",", "")),
                    อายุ60ถึง69ปีร้อยละ: parseFloat(this.list[i][2].replace(",", "")),
                    อายุ70ถึง79ปี: parseInt(this.list[i][3].replace(",", "")),
                    อายุ70ถึง79ปีร้อยละ: parseFloat(this.list[i][4].replace(",", "")),
                    อายุ80ถึง89ปี: parseInt(this.list[i][5].replace(",", "")),
                    อายุ80ถึง89ปีร้อยละ: parseFloat(this.list[i][6].replace(",", "")),
                    อายุมากกว่าหรือเท่ากับ90ปี: parseInt(this.list[i][7].replace(",", "")),
                    อายุมากกว่าหรือเท่ากับ90ปีร้อยละ: parseFloat(this.list[i][8].replace(",", "")),
                }
                this.setState(prevState => ({
                    data: [...prevState.data, value.อายุ60ถึง69ปีร้อยละ, value.อายุ70ถึง79ปีร้อยละ, value.อายุ80ถึง89ปีร้อยละ, value.อายุมากกว่าหรือเท่ากับ90ปีร้อยละ],
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {

        console.log(this.state.data);

        return (
            <div className="warp-cover">


                <div className="vertical-center">
                    <div className="box">
                        <div className="box-content">
                            <h1 className="animated fadeInDown ">Elderly Database</h1>
                            <h2 className="animated fadeInDown ">present</h2>
                            <div className="box-icon">
                                <IconData
                                    icon={this.state.icon}
                                    data={this.state.data}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Cover;