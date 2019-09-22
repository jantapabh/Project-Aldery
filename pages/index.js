import React from 'react'
import Nav from '../components/nav'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import Load from '../components/layout/load';
import Menu_icon from '../components/layout/menu-icon';
import CardDepartment from '../components/layout/coverDepartment';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      iconset1: [
        { text: "หน่วยงานดูแลผู้สูงอายุ", pic: "/static/department.svg", href: "/", name: "icon2", pichover: "/static/departmenthover.svg" },
        { text: "เบี้ยยังชีพ", pic: "/static/contract.svg", href: "/", name: "icon3", pichover: "/static/docmenthover.svg" },
        { text: "ติดต่อ", pic: "/static/phone.svg", href: "/", name: "icon4", pichover: "/static/phonehover.svg" },
        { text: "กิจกรรม", pic: "/static/active.svg", href: "/", name: "icon4", pichover: "/static/activehover.svg" },

      ],
      iconset2: [
        { text: "บริการดูแลผู้สูงอายุ", pic: "/static/wheelchair.svg", href: "/care", name: "icon1", pichover: "/static/wheelchairhover.svg" },
        { text: "การตรวจสุขภาพ", pic: "/static/stethoscope.svg", href: "/checkup", name: "icon2", pichover: "/static/stethoscopehover.svg" },
        { text: "โรงพยาบาลใกล้บ้าน", pic: "/static/hopital.svg", href: "/hospital", name: "icon3", pichover: "/static/hopitalhover.svg" },
        { text: "สายด่วน", pic: "/static/ambulance.svg", href: "/emergencyNumber", name: "icon4", pichover: "/static/ambulancehover.svg" }

      ],
      card: [
        { pic: "/static/logo-department1.png", name: "ผส.", link: "http://www.dop.go.th/" },
        { pic: "/static/logo-department2.png", name: "หลักประกันสุขภาพแห่งชาติ", link: "https://www.nhso.go.th/" },
        { pic: "/static/logo-department3.jpg", name: "กองทุนผู้สูงอายุ", link: "http://www.olderfund.dop.go.th/" },
        { pic: "/static/logo-department4.png", name: "มูลนิธิสถาบันวิจัยและพัฒนาผู้สูงอายุไทย", link: "http://thaitgri.org/" },

      ],
      isLoad: false
    }
    this.timer = setTimeout(this.Load, 5500);
  }

  async componentDidMount() {
    await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

}

   Load = () => {
    this.setState({
      isLoad: true
    });
  }


  render() {

    if (!this.state.isLoad) {
      return <Load name="index"/>
    }

    return (
      <div className="warp-index">
        <Nav name="/" />

        <div className="box-index">
          <Cover />
          <Menu_icon
            icon={this.state.iconset1}
          />
          <Menu_icon
            icon={this.state.iconset2}
          />
          {/* <CardDepartment
              card={this.state.card}
          /> */}


        </div>

      </div>
    )
  }
}
export default Home
