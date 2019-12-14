import React from 'react'
import Nav_table from '../../components/nav_table';
import Table from '../../components/layout/table'
import Sheetapi from '../../config/api'
class Mantable extends React.Component {

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
        await this.list('เพศชาย!A8:E')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ลำดับที่: this.list[i][0],
                    คำนำหน้า: this.list[i][2],
                    ชื่อ: this.list[i][3],
                    นามสกุล: this.list[i][4],

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
        const { data } = this.state

        return (
            <React.Fragment>
                <Nav_table name="table" />
                <Table
                    data={data}
                />
            </React.Fragment>
        )
    }
}
export default Mantable