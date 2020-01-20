import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const PieChart = () => {

    const [options, setOptions] = useState({
        title: {
            text: "เพศชาย"
        },
        responsive: [{
            breakpoint: 900,
            options: {
                chart: {
                    width: 260,
                    height: 260
                },
                legend: {
                    position: 'bottom'
                },
                dataLabels: { enabled: false },
            }
        }],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        }
    })

    const [dataname, setDataName] = useState([])
    const [series, setSeries] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!D8:D12')
        await listData(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!F8:F12')
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
            <div className="warp-chart-small">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />

            </div>

            <div className="warp-chart-mobile">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />
            </div>

            <div className="warp-chart-tablets">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />
            </div>

            <div className="warp-chart-desktops">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="500"
                    height="250"
                />
            </div>

            <div className="warp-chart-large">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="450"
                    height="250"
                />
            </div>
        </React.Fragment>
    )
}
export default PieChart;
