import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const PieEconomy2 = props => {

  const isBigScreen = useMediaQuery({ minDeviceWidth: 1281 })
  const isMobile = useMediaQuery({ maxWidth: 1280 })
  const isSmallScreen = useMediaQuery({ maxWidth: 576 })

  const [options, setOptions] = useState({
    title: { text: "อาชีพของประชากรผู้สูงอายุ" },
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
    labels: ["รับจ้าง", "ธุรกิจส่วนตัว", "ค้าขาย", "เกษตรกรรม", "ไม่มีอาชีพ", "อื่นๆ"],
    colors: ['#8ed1fc', '#7bdcb5', '#d3b3e5', '#ffd54f', '#ff8a65', '#90a4ae']
  })

  const [series, setSeries] = useState([20, 20, 20, 20])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B52:B57')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C52:C57')
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
      props.onToken(true)
    }
  }
  return (
    <React.Fragment>
      {
        isBigScreen ?
          <Chart
            options={options}
            series={series}
            type="donut"
            width="400"
            height="200"
          />
          :
          isMobile ?
            <Chart
              options={options}
              series={series}
              type="donut"
              width="300"
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
export default PieEconomy2;
