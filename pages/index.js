import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import Load from '../components/layout/load';

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

  render() {

    return (
      <div >
        <Nav name="/" />
        <Cover />
      </div>
    )
  }
}
export default Home
