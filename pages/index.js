import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import BG from '../components/layout/bg';
import Load from '../components/layout/load'


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeImg: false,
      icon: [
        { text: "หน่วยงานที่เกี่ยวข้อง", pic: "/static/bank.svg",href:"/" },
        { text: "หน่วยงานดูแลผู้สูงอายุ", pic: "/static/department.svg",href:"/department"  },
        { text: "เอกสารที่จำเป็น", pic: "/static/contract.svg",href:"/document"  },
        { text: "กิจกรรม", pic: "/static/active.svg",href:"/active"  }

      ]
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

        <div className="warp-menu" >
          <div className="menu">
            <div className="warp-icon">
              {
                this.state.icon.map((item, index) => {
                  return (
                    <a href={item.href}>
                      <div className="icon" key={index}>
                      <div className="icon-img">
                        <img  src={item.pic} alt="icon" />
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

        <div className="warp-content" >
          <div className="content">
          </div>
        </div>

      </div>
    )
  }
}
export default Home
