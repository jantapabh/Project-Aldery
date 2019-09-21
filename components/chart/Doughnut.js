import React from 'react'
import Sheetapi from '../../config/api'

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
                
            </div>
        )
    }
}
export default Doughnutchart;