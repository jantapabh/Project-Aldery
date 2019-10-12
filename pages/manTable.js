import React from 'react'
import Table from '../components/layout/table'
import Nav from '../components/nav'
import Sheetapi from '../config/api'
class Man extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('เพศชาย!D8:F')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    คำนำหน้า: this.list[i][0],
                    ชื่อ: this.list[i][1],
                    นามสกุล: this.list[i][2],
          
                }
                this.setState(prevState => ({
                    data: [...prevState.data, value]
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        const {data} = this.state
      
        return (
            <div className="warp-main">
                <Nav name="man" />

                <Table
                    data={data}
                />

            </div>
        )
    }
}
export default Man