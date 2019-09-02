import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import BG from '../components/layout/bg';
import Chart from '../components/chart/chart';
import Barchart from '../components/chart/barchart';
import Radialchart from '../components/chart/radialchart';


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeImg: false,
      icon: [
        { text: "หน่วยงานที่เกี่ยวข้อง", pic: "/static/bank.svg", href: "/", name: "icon1", pichover: "/static/bankhover.svg" },
        { text: "หน่วยงานดูแลผู้สูงอายุ", pic: "/static/department.svg", href: "/department", name: "icon2", pichover: "/static/departmenthover.svg" },
        { text: "เอกสารที่จำเป็น", pic: "/static/contract.svg", href: "/document", name: "icon3", pichover: "/static/docmenthover.svg" },
        { text: "กิจกรรม", pic: "/static/active.svg", href: "/active", name: "icon4", pichover: "/static/activehover.svg" }

      ],

    }
  }

  async componentDidMount() {
    this.userOauth = JSON.parse(localStorage.getItem("myOauth"))
    localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

  }


  render() {

    return (
      <div className="warp">
        <Nav name="main" />
        <BG />

        <div className="warp-content" >
          <div className="content">
            <h1 >ยินดีต้อนรับเข้าสู่</h1>
            <h2 >เว็บฐานข้อมูล ผู้สูงอายุภายในจังหวัดภูเก็ต</h2>
            <text>จากการคาดการณ์ โดยสำนักงานสถิติจะพบว่า </text>
            <text>เเนวโน้มของจำนวนผู้สูงอายุที่เพิ่มสูงขึ้นเรื่อยๆ จะส่งผลให้ประเทศเข้าสู่สภาวะ "สังคมผู้สูงอายุ" อย่างสมบูรณ์</text>
          </div>
        </div>


        <div className="warp-menu" >
          <div className="menu">
            <div className="warp-icon">
              {
                this.state.icon.map((item, index) => {
                  return (
                    <a href={item.href}>
                      <div className="icon" key={index}>
                        <div className="icon-img">
                          <img key={index} src={item.pic} alt={item.name} />
                          <img className="hover" src={item.pichover} alt={item.name} />
                        </div>

                        <h6>{item.text}</h6>
                      </div>
                    </a>

                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="warp-chart" >
          <div className="chart">
            <Chart />
            <Barchart />
          </div>

          <div className="chart-main">
            <Radialchart />
          </div>
        </div>

      </div>
    )
  }
}
export default Home
