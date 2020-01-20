import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const PieService = () => {
    const [options, setOptions] = useState({
        title: { text: "การเข้าร่วมกิจกรรมทางสังคม/เทศบาล" },
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
        colors: ['#ff8a65', '#ffd54f', '#90a4ae']
    })

    const [series, setSeries] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!CV8:CV10')
        await listData(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!CW8:CW10')
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
            height="300"
            width="500"
        />
    )
}
export default PieService;
