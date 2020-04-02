import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Sheetapi from '../../config/api';
import { useMediaQuery } from 'react-responsive';

const BarHospital = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 })
  const [options, setOptions] = useState({

    title: {
      text: 'สถานพยาบาลที่ใช้ประจำของผู้สูงอายุ',
      align: 'left'
    },
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
      '#eb144c', '#673ab7', '#ff6900', '#455a64', '#f44336'],

    labels: ["โรงพยาบาลส่งเสริมสุขภาพกะทู้", "โรงพยาบาลป่าตอง", "โรงพยาบาลวชิระภูเก็ต", "โรงพยาบาลเอกชน", "คลินิกเอกชน", "ซื้อยาทานเอง", "อื่นๆ", "มากกว่า 1 เเหล่ง"]
  })

  const [series, setSeries] = useState([20, 20, 20, 20])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!V74:V81')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!W74:W81')
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
export default BarHospital;
