import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Sheetapi from '../../config/api';
import { useMediaQuery } from 'react-responsive';

const BarHospital3 = () => {
    const isTablet = useMediaQuery({ minWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxWidth: 768 })
    
    const [options, setOptions] = useState({
        title: {
            text: 'การตรวจสุขภาพประจำปีของผู้สูงอายุ',
            align: 'left'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                dataLabels: {
                    position: 'top',
                },
            }
        },
        responsive: [{
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }],
        dataLabels: { enabled: false },
        stroke: {
            show: true,
            width: 2,
            colors: ['#fff']
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
            categories: ["ตรวจเป็นประจำทุกปี", "นาน ๆ ครั้ง", "ไม่เคยตรวจ", "อื่นๆ"]
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
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!Z74:Z77')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!AB74:AB77', 'ข้อมูลการวิเคราะห์ทางสถิติ!AC74:AC77')
    }

    const namelist = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)

            setOptions({
                xaxis: {
                    categories: _.flatten(list),
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
            console.log(err);
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
                    isTablet ?
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="400"
                            width="500"
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
export default BarHospital3;
