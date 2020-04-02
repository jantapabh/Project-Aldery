import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import _ from 'lodash'
import { useMediaQuery } from 'react-responsive';

const BarMap = props => {

    const isMobile = useMediaQuery({ maxWidth: 575.98 })
    const isSmallScreen = useMediaQuery({ maxWidth: 768 })

    const [options, setOptions] = useState({
        title: {
            text: 'สถานภาพของผู้สูงอายุ',
            align: 'left'
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
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " คน"
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["กมลา", "กะทู้", "ป่าตอง", "ฉลอง", "กะรน", "เกาะแก้ว", "รัษฎา", "ราไวย์", "ตลาดเหนือ", "ตลาดใหญ่", "วิชิต", "เชิงทะเล", "ไม้ขาว", "ป่าคลอก", "สาคู", "ศรีสุนทร", "เทพกระษัตรี"],
        },
    })
    const [series, setSeries] = useState([{ name: "จำนวน", data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }])

    useEffect(() => {
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

            setOptions({
                xaxis: {
                    categories: _.flatten(list),
                },
                fill: {
                    opacity: 1,
                    colors: ['#00d084']
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " คน"
                        }
                    }
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
        } catch (err) {
            props.onToken(true)
        }
    }

    return (
        <React.Fragment>
            {
                isMobile ?
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        height="300"
                        width="300"
                    />
                    :
                    isSmallScreen ?
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="300"
                            width="350"
                        />
                        :
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="400"
                            width="650"
                        />
            }
        </React.Fragment>
    )
}
export default BarMap;