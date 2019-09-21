import React from 'react'
import sheetList from '../../config/Sheets'
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


    async componentDidMount() {

        const access_token = await sheetList.Sheet()
        const list = await sheetList.List2(access_token,'!N2:P2')

        this.setState(prevState => ({
            data: [...prevState.data, list]
        }))

    }

    render() {

        return (
            <div className="warp-card">

                {
                    !!this.props.card ?
                        <React.Fragment>
                            {
                                this.props.card.map((item, index) => {
                                    return (

                                        <Link key={index} href={item.url}>
                                            <div className={`hover-card ${item.hover}`}>
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
                                            </div>
                                        </Link>

                                    )
                                })
                            }
                        </React.Fragment>
                        :
                        null

                }

            </div>
        )
    }
}
export default CardData;

