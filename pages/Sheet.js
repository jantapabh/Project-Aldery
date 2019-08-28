import React from 'react'
import Sheetapi from '../config/api'
import Load from '../components/layout/load';

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
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        
        await this.list('!B1:B')
        await this.list('!F1:F')
        await this.list('!G1:G')
        await this.list('!H1:H')

    }

    list = async (value) => {

        try {
            let list = await Sheetapi.getSheetValues(this.access_token,value)

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

           if(this.state.totallist.length < 1 ) {
               return(
                   <div>
                       <Load/>
                   </div>
               )
           }
        
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

                {
                    this.state.manlist.map((item, index) => {
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })
                }

                {
                    this.state.womanlist.map((item, index) => {
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })
                }

                {
                    this.state.totallist.map((item, index) => {
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