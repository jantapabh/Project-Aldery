import React from 'react'
import Nav from '../components/nav'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import Load from '../components/layout/load';
import Menu_icon from '../components/layout/menu-icon';
import CardDepartment from '../components/layout/coverDepartment';

class Home extends React.Component {


  static defaultProps = {
    isLoad: false
}

  constructor(props) {
    super(props);

    this.state = {

      icon: [
        { text: "หน่วยงานที่เกี่ยวข้อง", pic: "/static/bank.svg", href: "/", name: "icon1", pichover: "/static/bankhover.svg" },
        { text: "หน่วยงานดูแลผู้สูงอายุ", pic: "/static/department.svg", href: "/department", name: "icon2", pichover: "/static/departmenthover.svg" },
        { text: "เบี้ยยังชีพ", pic: "/static/contract.svg", href: "/document", name: "icon3", pichover: "/static/docmenthover.svg" },
        { text: "กิจกรรม", pic: "/static/active.svg", href: "/active", name: "icon4", pichover: "/static/activehover.svg" }

      ],
    }
  }


  render() {

    return (
      <div className="warp-index">
        <Nav name="/" />

        <div className="box-index">
          <Cover />
          <Menu_icon
            icon={this.state.icon}
          />
          <CardDepartment />


        </div>

      </div>
    )
  }
}
export default Home
