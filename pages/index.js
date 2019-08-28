import React from 'react'
import Nav from '../components/nav'
import CardProfile from '../components/layout/cardCover'
import '../styles/base.scss'
import Sheetapi from '../config/api'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
  }

  render() {
    return (
      <div>
        <Nav />
        <CardProfile
          avatar="/static/cover.png"
          name="cover"
          text_head="ฐานข้อมูลผู้สูงอายุ"
          text="เข้าสู่หน้าหลัก"
        />

      </div>
    )
  }
}
export default Home
