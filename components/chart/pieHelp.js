import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';

const PieHelp = props => {

  const isBigScreen = useMediaQuery({ minDeviceWidth: 1281 })
  const isMobile = useMediaQuery({ maxWidth: 1280 })
  const isSmallScreen = useMediaQuery({ maxWidth: 576 })

  const [options, setOptions] = useState({
    title: { text: "สภาพความเดือดร้อนในปัจจุบันของผู้สูงอายุ", align: 'left' },
    legend: {
      position: 'bottom'
    },
    dataLabels: { enabled: false },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " คน"
        }
      }
    },
    colors: ['#2196f3', '#00d084', '#ffc107',
      '#eb144c', '#673ab7', '#abb8c3',
      '#f78da7', '#ff6900', '#7bdcb5'],
    labels: ['รูปแบบที่ 1', 'รูปแบบที่ 2', 'รูปแบบที่ 3', 'รูปแบบที่ 4', 'รูปแบบที่ 5',
      'รูปแบบที่ 6', 'รูปแบบที่ 7', 'รูปแบบที่ 8', 'รูปแบบที่ 9']
  })

  const [series, setSeries] = useState([20, 20, 20, 20])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B152:B160')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!C152:C160')
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
export default PieHelp;
