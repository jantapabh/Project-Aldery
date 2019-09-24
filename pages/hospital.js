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
        await this.list('โรงพยาบาลใกล้เคียง!A4:E12')
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

        const { dataList } = this.state

        return (
            <div className="warp-service">
                <Nav name="hospital" />
                <div className="content-service">

                    {dataList.map((item, index) => {
                        return (
                            index <= index / 2 ?
                                <div className="service-list" key={index}>
                                    <h5>{item.ชื่อ}</h5>
                                    <h6>{item.ที่อยู่}</h6>
                                    <h6>{item.เบอร์ติดต่อ}</h6>
                                    <p>{item.ฉุกเฉิน}</p>
                                </div>
                                :
                                null
                        )
                    }
                    )}

                    {dataList.map((item, index) => {
                        return (
                            index >= index / 2 ?
                                <div className="service-list" key={index}>
                                    <h5>{item.ชื่อ}</h5>
                                    <h6>{item.ที่อยู่}</h6>
                                    <h6>{item.เบอร์ติดต่อ}</h6>
                                    <p>{item.ฉุกเฉิน}</p>
                                </div>
                                :
                                null
                        )
                    }
                    )}

                </div>
            </div>
        )
    }
}
export default Hospital;