import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const PieSocial2 = () => {
    const [options, setOptions] = useState({
        title: { text: "สภาพบ้านของประชากรผู้สูงอายุ" },
        legend: {
            position: 'bottom'
        },
        responsive: [{
            breakpoint: 900,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom'
                },
                dataLabels: { enabled: false }
            }
        }],

        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        },

        colors: ['#7bdcb5', '#d3b3e5', '#ffd54f', '#90a4ae']
    })

    const [dataname, setDataName] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!N98:N99')
        await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!O98:O99')
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
        <Chart
            options={options}
            series={series}
            type="pie"
            height="250"
            width="450"
        />
    )
}
export default PieSocial2;
