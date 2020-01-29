import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'


const PieEconomy3 = () => {
  const [options, setOptions] = useState({
    title: { text: "การออม" },
    plotOptions: {
      radialBar: {
        offsetY: -5,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,

          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 10,
      offsetY: 70,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + " คน "
      },
      itemMargin: {
        horizontal: 1,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }
    ]
  })

  const [series, setSeries] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!R52:R53')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!S52:S53')
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
      type="radialBar"
      height="350"
      width="400"
    />
  )
}
export default PieEconomy3;
