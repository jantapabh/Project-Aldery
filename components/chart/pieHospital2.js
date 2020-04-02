import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const PieHospital2 = () => {

    const isBigScreen = useMediaQuery({ minDeviceWidth: 1281 })
    const isMobile = useMediaQuery({ maxWidth: 1280 })
    const isSmallScreen = useMediaQuery({ maxWidth: 576 })

    const [options, setOptions] = useState({
        title: { text: "สภาพความพิการ" },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        },
        legend: {
            position: 'bottom'
        },
        colors: ['#2196f3', '#00d084', '#ffc107',
            '#eb144c', '#673ab7', '#ff6900', '#7bdcb5'],
        labels: ["ไม่เป็นผู้พิการ", "ทางการมองเห็น", "ทางการได้ยินหรือสื่อความหมาย", "ทางกายหรือการเคลื่อนไหว", "ทางจิตใจหรือพฤติกรรม", "ทางสติปัญญาหรือการเรียนรู้", "อื่นๆ"]
    })

    const [series, setSeries] = useState([20, 20, 20, 20])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!F74:F80')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!G74:G80')
    }

    const namelist = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)

            setOptions({
                labels: _.flatten(list)
            })
        } catch (err) {
            console.log(err);
        }
    }

    const listData = async (token, value) => {
        try {

            var result = await Sheetapi.getSheet(token, value)
            var data = _.flatten(result).map(Number)
            setSeries(data)
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
                        type="donut"
                        width="300"
                        height="200"
                    />
                    :
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        width="400"
                        height="200"
                    />
            }
        </React.Fragment>
    )
}
export default PieHospital2;
