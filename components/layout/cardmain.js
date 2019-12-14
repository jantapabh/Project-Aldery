import React from 'react'
import Sheetapi from '../../config/api'
import CountUp from 'react-countup';
import Link from 'next/link';

class CardData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentWillMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.list('ข้อมูลการวิเคราะห์ทางสถิติ!B10:D10')
    }
    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet(this.access_token, value)


            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ชาย: this.list[i][0],
                    หญิง: this.list[i][1],
                    รวม: this.list[i][2],

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
            <div className="warp-card-basic">
                <div className="card-group">
                    <Link href="/main/mantable">
                        <div className="card">
                            <div className="card-data">
                                <img src="/static/old-man.svg" />
                                <div className="card-text">
                                    <h5>เพศชาย</h5>
                                    {this.state.data.map((item, index) => {
                                        return (
                                            <h4 key={index}>{item.ชาย} คน</h4>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card-group">
                    <Link href="/main/womantable">
                        <div className="card">
                            <div className="card-data">
                                <img src="/static/old-woman.svg" />
                                <div className="card-text">
                                    <h5>เพศหญิง</h5>
                                    {this.state.data.map((item, index) => {
                                        return (
                                            <h4 key={index}>{item.หญิง} คน</h4>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card-group">
                    <Link href='/main/totaltable'>
                        <div className="card">
                            <div className="card-data">
                                <img src="/static/couple.svg" />
                                <div className="card-text">
                                    <h5>รวม</h5>
                                    {this.state.data.map((item, index) => {
                                        return (
                                            <h4 key={index}><CountUp end={item.รวม} /> คน</h4>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        )
    }
}
export default CardData;

