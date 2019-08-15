import React from 'react'
import Sheetapi from '../config/api'
import Cookies from 'cookies-js'

class Sheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            provinceList: [],
            manlist: [],
            womanlist: [],
            totallist: []
        }
    }

    async componentDidMount() {
        await this.list('!B1:B')
        await this.list('!F1:F')
        await this.list('!G1:G')
        await this.list('!H1:H')
    }

    list = async (value) => {

        try {
            let list = await Sheetapi(value)

            if (value == '!B1:B')
                this.setState({
                    provinceList: list
                })

            else if (value == '!F1:F')
                this.setState({
                    manlist: list
                })

            else if (value == '!G1:G')
                this.setState({
                    womanlist: list
                })

            else if (value == '!H1:H')
                this.setState({
                    totallist: list
                })

        } catch (err) {
            console.log(err);
        }

    }

    render() {
        console.log(this.state.provinceList);

        if (this.state.provinceList < 1)
            return null

        return (
            <div>
                <h1>Hello</h1>
                {
                    this.state.provinceList.map((item, index) => {
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Sheet