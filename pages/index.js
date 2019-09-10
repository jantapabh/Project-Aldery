import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import Menu_icon from '../components/layout/menu-icon';
import Carousel from '../components/layout/carousel'

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      icon: [
        { text: "หน่วยงานที่เกี่ยวข้อง", pic: "/static/bank.svg", href: "/", name: "icon1", pichover: "/static/bankhover.svg" },
        { text: "หน่วยงานดูแลผู้สูงอายุ", pic: "/static/department.svg", href: "/department", name: "icon2", pichover: "/static/departmenthover.svg" },
        { text: "เอกสารที่จำเป็น", pic: "/static/contract.svg", href: "/document", name: "icon3", pichover: "/static/docmenthover.svg" },
        { text: "กิจกรรม", pic: "/static/active.svg", href: "/active", name: "icon4", pichover: "/static/activehover.svg" }

      ]
    }
  }

  async componentDidMount() {
    localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
  }

  render() {

    return (
      <div className="warp-index">
        <Nav />

        <Carousel />

        {/* <div className="warp-content" >
          <div className="content"></div>
          <div className="content">
            <h2 >เว็บฐานข้อมูลผู้สูงอายุภายในจังหวัดภูเก็ต</h2>
           

          </div>

        </div> */}




        <Menu_icon
          icon={this.state.icon}
        />


        {/* <Cover/> */}

      </div>
    )
  }
}
export default Home
