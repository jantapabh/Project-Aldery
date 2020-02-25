import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import _ from 'lodash'

const BarMap = () => {

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        dataLabels: { enabled: false },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1,
            colors: ['#00d084']
        },
        xaxis: {},
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            },
        },
    })
    const [series, setSeries] = useState([])
    const [dataName, setDataName] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [listData])

    const fetchData = async () => {

        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await namelist(userOauth.data.access_token, 'แผนที่!C5:C21')
        await listData(userOauth.data.access_token, 'แผนที่!D5:D21')
    }

    const namelist = async (token, value) => {
        try {
            var list = await Sheetapi.getSheet(token, value)
            setDataName(_.flatten(list))

            setOptions({
                xaxis: {
                    categories: _.flatten(list),
                },
                fill: {
                    opacity: 1,
                    colors: ['#00d084']
                }

            })
        } catch (err) {
            console.log(err);
        }
    }

    const listData = async (token, value) => {
        try {
            var data = await Sheetapi.getSheet(token, value)
            setSeries([{ name: "จำนวน", data: _.flatten(data) }])
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    return (

        <React.Fragment>
            {
                loading ? <h2>Loading...</h2> : <React.Fragment>
                    <div className="warp-chart-small">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="300"
                            width="350"
                        />
                    </div>

                    <div className="warp-chart-mobile">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="300"
                            width="450"
                        />
                    </div>

                    <div className="warp-chart-tablets">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="325"
                            width="500"
                        />
                    </div>

                    <div className="warp-chart-desktops">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="350"
                            width="650"
                        />
                    </div>

                    <div className="warp-chart-large">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="400"
                            width="650"
                        />
                    </div>
                </React.Fragment>
            }



        </React.Fragment>
    )
}
export default BarMap;