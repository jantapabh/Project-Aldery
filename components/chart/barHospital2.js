import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Sheetapi from '../../config/api';
import { useMediaQuery } from 'react-responsive';


const BarHospital2 = () => {

    const isTablet = useMediaQuery({ minWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxWidth: 768 })

    const [options, setOptions] = useState({
        title: {
            text: 'โรคประจำตัวของผู้สูงอายุ',
            align: 'left'
        },
        plotOptions: {
            bar: { horizontal: true }
        },
        chart: {
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        },
        xaxis: {
            categories: ["ไม่มีโรคประจำตัว", "ความดันโลหิตสูง", "โรคหัวใจ", "โรคเบาหวาน", "อัมพฤกษ์/อัมพาต", "โรคไต", "โรคมะเร็ง", "โรคสมองเสื่อม", "ปัญหาด้านสายตา", "ปัญหาด้านหู", "โรคอื่นๆ", "มากกว่า 1 โรค"]
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
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!N74:N85')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!P74:P85', 'ข้อมูลการวิเคราะห์ทางสถิติ!Q74:Q85')
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
                            height="400"
                            width="600"
                        />
            }
        </React.Fragment>
    )
}
export default BarHospital2;
