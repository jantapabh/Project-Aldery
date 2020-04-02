import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const PieDoc = () => {

  const isBigScreen = useMediaQuery({ minDeviceWidth: 1281 })
  const isMobile = useMediaQuery({ maxWidth: 1280 })
  const isSmallScreen = useMediaQuery({ maxWidth: 576 })

  const [options, setOptions] = useState({
    title: { text: "สถานภาพการรับสวัสดิการของผู้สูงอายุ" },

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
    labels: ["ไม่ได้รับสวัสดิการจากรัฐ", "อยู่ระหว่างลงทะเบียนรับเงินสงเคราะห์เบี้ยยังชีพ", "ได้รับเบี้ยยังชีพผู้สูงอายุ", "ได้รับเบี้ยยังชีพความพิการ", "ได้รับเบี้ยยังชีพผูู้ป่วย", "มีบัตรสวัสดิการเเห่งรัฐ", "มีบัตรประกันสังคม", "มากกว่าจาก 1 เเหล่ง", "อื่นๆ"],

    colors: ['#2196f3', '#00d084', '#ffc107',
      '#eb144c', '#673ab7', '#abb8c3',
      '#f78da7', '#ff6900', '#7bdcb5']
  })

  const [series, setSeries] = useState([20, 20, 20, 20])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!M9:M17')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!N9:N17')
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
          isMobile ?
            <Chart
              options={options}
              series={series}
              type="donut"
              width="400"
              height="200"
            />
            :
            isSmallScreen ?
              <Chart
                options={options}
                series={series}
                type="donut"
                width="200"
                height="100"
              />
              :
              null
      }
    </React.Fragment>
  )
}
export default PieDoc;
