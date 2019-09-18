import React from 'react'
import Nav from '../components/nav'
import CardService from '../components/layout/cardService'
import Sheetapi from '../config/api'

class Hospital extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('โรงพยาบาลใกล้เคียง!A4:E')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet3(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ลำดับที่: this.list[i][0],
                    ชื่อ: this.list[i][1],
                    ที่อยู่: this.list[i][2],
                    เบอร์ติดต่อ: this.list[i][3],
                    ฉุกเฉิน: this.list[i][4],
                    
                }
                this.setState(prevState => ({
                    dataList: [...prevState.dataList, value]
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        return (
            <div className="warp-service">
                <Nav name="hospital" />
                <div className="content-service">
                    <CardService
                        list={this.state.dataList}
                    />

                </div>
            </div>
        )
    }
}
export default Hospital;