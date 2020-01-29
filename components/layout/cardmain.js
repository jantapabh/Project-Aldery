import React, { useState, useEffect } from 'react'
import Sheetapi from '../../config/api'
import CountUp from 'react-countup';
import Link from 'next/link';
import _ from 'lodash'

const CardData = () => {

    const [data, setData] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await dataList(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B9:D9')
    }

    const dataList = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)
            for (let i = 0; i < list.length; i++) {
                var value = await {
                    ชาย: list[i][0],
                    หญิง: list[i][1],
                    รวม: list[i][2],
                }
            }
            setData([value])
            //    setData(_.values(value).map(Number))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="warp-card-basic">
            <div className="card-group">
                <Link href="/main/mantable">
                    <div className="card">
                        <div className="card-data">
                            <img src="/static/old-man.svg" />
                            <div className="card-text">
                                <h5>เพศชาย</h5>
                                {
                                    data ? data.map((item, index) =>
                                        (
                                            <h4 key={index}>{item.ชาย} คน</h4>
                                        )
                                    )
                                        :
                                        <h4>0 คน</h4>
                                }
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
                                {
                                    data ? data.map((item, index) =>
                                        (
                                            <h4 key={index}>{item.หญิง} คน</h4>
                                        )
                                    )
                                        : <h4>0 คน</h4>
                                }
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
                                {
                                    data ? data.map((item, index) =>
                                        (
                                            <h4 key={index}><CountUp end={item.รวม} /> คน</h4>
                                        )
                                    )
                                        : <h4>0 คน</h4>
                                }
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default CardData;

