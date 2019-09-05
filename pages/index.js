import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import BG from '../components/layout/bg';
import CardProfile from '../components/layout/cardCover'

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
      animationFont: "animated bounceInUp delay-1s",
      prevScrollpos: global.pageYOffset,
      visible: true,

    }
  }

  async componentDidMount() {
    localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,

    })

  }

  render() {

    console.log(this.state.prevScrollpos);


    return (
      <div className="warp">
        <Nav name="main" />
        <BG />

        <div className="warp-content" >

          {
            this.state.prevScrollpos > 80 ?

              <div className="content">
                <h1 className={this.state.animationFont} >ยินดีต้อนรับเข้าสู่</h1>
                <h2 className={this.state.animationFont}>เว็บฐานข้อมูล ผู้สูงอายุภายในจังหวัดภูเก็ต</h2>
                <text className={this.state.animationFont}>จากการคาดการณ์ โดยสำนักงานสถิติจะพบว่า </text>
                <text className={this.state.animationFont}>เเนวโน้มของจำนวนผู้สูงอายุที่เพิ่มสูงขึ้นเรื่อยๆ จะส่งผลให้ประเทศเข้าสู่สภาวะ "สังคมผู้สูงอายุ" อย่างสมบูรณ์</text>
              </div>
              :
              null

          }

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


      </div>
    )
  }
}
export default Home
