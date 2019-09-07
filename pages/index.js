import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import Card from '../components/layout/card';
import Chart from '../components/chart/chart';

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
      card: [
        { name: "card1", img: "/static/grandfather.svg", text: "เพศชาย" },
        { name: "card2", img: "/static/old-woman.svg", text: "เพศหญิง" },
        { name: "card3", img: "/static/couple.svg", text: "รวม" }]

    }
  }

  async componentDidMount() {
    localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
  }

  render() {

    return (
      <div className="warp-index">
        <Nav name="main" />


        {/* <div className="warp-content" >
          <div className="content">
            <h1  >ยินดีต้อนรับเข้าสู่</h1>
            <h2 >เว็บฐานข้อมูล ผู้สูงอายุภายในจังหวัดภูเก็ต</h2>
            <text >จากการคาดการณ์ โดยสำนักงานสถิติจะพบว่า </text>
            <text >เเนวโน้มของจำนวนผู้สูงอายุที่เพิ่มสูงขึ้นเรื่อยๆ จะส่งผลให้ประเทศเข้าสู่สภาวะ "สังคมผู้สูงอายุ" อย่างสมบูรณ์</text>
          </div>
        </div> */}


        {/* <Barchart/> */}


        <div className="content-index">
          <Card
            card={this.state.card}
          />

          <Chart />
        </div>





      </div>
    )
  }
}
export default Home
