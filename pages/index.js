import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import BG from '../components/layout/bg';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      icon: [
        { text: "หน่วยงานที่เกี่ยวข้อง", pic: "/static/bank.svg" },
        { text: "หน่วยงานดูแลผู้สูงอายุ", pic: "/static/department.svg" },
        { text: "เอกสารที่จำเป็น", pic: "/static/contract.svg" },
        { text: "กิจกรรม", pic: "/static/active.svg" }

      ]
    }
  }

  async componentDidMount() {
    localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
  }

  render() {
    return (
      <div className="warp">
        <Nav name="main" />
        <BG />

        <div className="warp-menu" >
          <div className="menu">
            <div className="warp-icon">
              {
                this.state.icon.map((item, index) => {
                  return (

                    <div className="icon" key={index}>
                      <img src={item.pic} alt="icon" />
                      <h6>{item.text}</h6>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="warp-content" >
          <div className="content">
            
              {/* <img  src="/static/bg.jpg" />
              <img  src="/static/bg2.jpg" />
              <img  src="/static/bg3.jpg" /> */}
           
          </div>
        </div>

      </div>
    )
  }
}
export default Home
