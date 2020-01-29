import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'

const BarHospital3 = () => {
    const [options, setOptions] = useState({
        title: {
            text: 'การตรวจสุภาพประจำปี',
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
        }
    })

    const [series, setSeries] = useState([])
    const [dataName, setDataName] = useState([])

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
            setDataName(_.flatten(list))

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
            <div className="warp-chart-small">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="300"
                    width="290"
                />
            </div>

            <div className="warp-chart-mobile">
                <Chart options={options}
                    series={series}
                    type="bar"
                    height="300"
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
                    height="350"
                    width="450"
                />
            </div>
        </React.Fragment>
    )
}
export default BarHospital3;
