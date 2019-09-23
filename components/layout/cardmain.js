import React from 'react'
import Sheetapi from '../../config/api'
import CountUp from 'react-countup';
import Link from 'next/link';

class CardData extends React.Component {

    static defaultProps = {
        card: [],
    }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentWillMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('!N2:P2')
    }
    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet2(this.access_token, value)


            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ชาย: parseInt(this.list[i][0].replace(",", "")),
                    หญิง: parseInt(this.list[i][1].replace(",", "")),
                    รวม: parseInt(this.list[i][2].replace(",", "")),

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
        return (
            <div className="warp-card">

                {
                    !!this.props.card ?
                        <div className="card-main">
                            {
                                this.props.card.map((item, index) => {
                                    return (

                                        <Link key={index} href={item.url}>
                                           
                                                <div className="card">

                                                    <div className="card-img">
                                                        <img src={item.img} alt={item.name} />
                                                    </div>
                                                    <div className="card-conten">
                                                        <div className="card-text">
                                                            <h5>{item.text}</h5>
                                                        </div>
                                                        <div className="card-data">
                                                            {
                                                                index == 0 ?
                                                                    <div>
                                                                        {
                                                                            this.state.data.map((item1, index1) => {
                                                                                return (
                                                                                    <h4 key={index1}>{item1.ชาย} คน</h4>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                    :
                                                                    index == 1 ?
                                                                        <div>
                                                                            {
                                                                                this.state.data.map((item2, index2) => {
                                                                                    return (
                                                                                        <h4 key={index2}>{item2.หญิง} คน</h4>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                        :
                                                                        index == 2 ?
                                                                            <div>
                                                                                {
                                                                                    this.state.data.map((item3, index3) => {
                                                                                        return (
                                                                                            <h4 key={index3}><CountUp end={item3.รวม} /> คน</h4>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                            :
                                                                            null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                          
                                        </Link>

                                    )
                                })
                            }
                        </div>
                        :
                        null

                }

            </div>
        )
    }
}
export default CardData;

