import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'


const BarSocial = () => {
    const [options, setOptions] = useState({
        title: {
            text: 'ที่่ดิน',
            align: 'left'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
            },
        },
        responsive: [{
            breakpoint: 10,
        }],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
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
        }
    })

    const [dataname, setDataName] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!CJ8:CJ13')
        await listData(userOauth.data.access_token, 'สรุปข้อมูลทางสถิติ!CL8:CL13','สรุปข้อมูลทางสถิติ!CM8:CM13')
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
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <div className="warp-chart-small">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="325"
                    width="290"
                />
            </div>

            <div className="warp-chart-mobile">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="325"
                    width="400"
                />
            </div>

            <div className="warp-chart-tablets">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="325"
                    width="450"
                />
            </div>

            <div className="warp-chart-desktops">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="350"
                    width="500"
                />
            </div>

            <div className="warp-chart-large">
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height="400"
                    width="480"
                />
            </div>
        </React.Fragment>
    )
}
export default BarSocial;