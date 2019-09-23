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
        await this.list('เพศชาย!A5:J')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet2(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ลำดับที่: this.list[i][0],
                    หมู่บ้าน: this.list[i][1],
                    บ้านเลขที่: this.list[i][2],
                    ชุมชน: this.list[i][3],
                    เลขบัตรประชาชน: this.list[i][4],
                    คำนำหน้า: this.list[i][5],
                    ชื่อ: this.list[i][6],
                    นามสกุล: this.list[i][7],
                    วันเกิด: this.list[i][8],
                    อายุ: this.list[i][9]
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
        return (
            <div className="warp-main">
                <Nav name="man" />

                <Table
                    data={this.state.data}
                />

            </div>
        )
    }
}
export default Man