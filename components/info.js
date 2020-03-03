import React, { useState } from 'react'
import CountUp from 'react-countup';


const Info = () => {

    const [data, setData] = useState([
        {
            title: 11,
            subtitle: "จังหวัดภูเก็ต",
        },
        {
            title: 20096,
            subtitle: "เพศชาย",
        },
        {
            title: 25725,
            subtitle: "เพศหญิง",
        },
        {
            title: 45821,
            subtitle: "รวม",
        }
    ])

    return (
        <div className="warp-info">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="head-content">
                        <h3>จำนวนประชากรผู้สูงอายุที่มีอายุ 60 ปีขึ้นไป</h3>
                        <h6>ณ วันที่ 31 ธันวาคม 2562</h6>
                    </div>

                    <div className="detail-content">
                        {
                            data.map((item, index) => (
                                <div className="card">
                                    <div className="card-body">
                                        {
                                            item.subtitle == "รวม" ?
                                                <h1 className="card-title red"> <CountUp start={0} end={parseInt(item.title)} separator="," /> คน</h1>
                                                :
                                                item.subtitle == "จังหวัดภูเก็ต" ?
                                                    <h1 className="card-title">{item.title}%</h1>
                                                    :
                                                    <h1 className="card-title">{item.title.toLocaleString()} คน</h1>
                                        }
                                        <h6 className="card-subtitle">{item.subtitle}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;