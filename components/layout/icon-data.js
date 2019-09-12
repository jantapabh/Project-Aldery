import React from 'react'


class IconData extends React.Component {

    static defaultProps = {
        icon: []
    }

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    async componentDidMount() {

        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('sheets!D2:L2')
    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet2(this.access_token, value)
            console.log("LIst:",this.list);
            

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
                    data: [...prevState.data, value]
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {

        console.log(this.props.data);

        return (
            <div >
                {
                    this.props.icon.map((item, index) => {
                        return (
                            <React.Fragment>
                                <svg
                                    className="progress-ring"
                                    height="120"
                                    width="120"
                                >
                                    <circle
                                        className="progress-ring__circle"
                                        stroke={item.color}
                                        stroke-width="3"
                                        fill="transparent"
                                        r="50"
                                        cx="60"
                                        cy="60"
                                    />
                                </svg>
                            </React.Fragment>
                        )
                    })
                }


            </div>
        )
    }
}
export default IconData;