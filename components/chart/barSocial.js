import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const BarSocial = props => {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 })

    const [options, setOptions] = useState({
        title: {
            text: 'ที่่ดิน',
            align: 'left'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        },
        xaxis: {
            categories: ['รูปแบบที่ 1', 'รูปแบบที่ 2', 'รูปแบบที่ 3',
                'รูปแบบที่ 4', 'รูปแบบที่ 5', 'รูปแบบที่ 6']
        }
    })

    const [series, setSeries] = useState([
        {
            name: 'เพศชาย',
            data: [50, 50, 50, 50, 50]
        },
        {
            name: 'เพศหญิง',
            data: [50, 50, 50, 50, 50]
        }
    ])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B98:B103')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!D98:D103', 'ข้อมูลการวิเคราะห์ทางสถิติ!E98:E103')
    }

    const namelist = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)
            setOptions({
                xaxis: {
                    categories: _.flatten(list)
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    const listData = async (token, value1, value2) => {
        try {

            var man = await Sheetapi.getSheet(token, value1)
            var woman = await Sheetapi.getSheet(token, value2)
            setSeries([{ name: "เพศชาย", data: _.flatten(man) }, { name: "เพศหญิง", data: _.flatten(woman) }])
        } catch (err) {
            props.onToken(true)
        }
    }

    return (
        <React.Fragment>
            {
                isSmallScreen ?
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        height="300"
                        width="300"
                    />
                    :
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        height="300"
                        width="600"
                    />
            }
        </React.Fragment>
    )
}
export default BarSocial;