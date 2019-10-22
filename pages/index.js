import React from 'react'
import Nav from '../components/nav'
import Sheetapi from '../config/api'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      isLoad: false
    }
    // this.timer = setTimeout(this.Load, 5500);
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


    return (
      <div className="warp-index">
        <Nav name="/" />
        <main>
          <Header />
          <div className="page-content">
            <div className="container-fluid">
              <h1>Eldery DB</h1>
              <h2>ฐานข้อมูลผู้สูงอายุ และอินโฟกราฟิก</h2>
              <div className="textarea-center">
                <text>เป็นการนำข้อมูลของประชากรผู้ที่เป็นผู้สูงอายุ มาทำอินโฟกราฟิกในรูปแบบต่าง ๆ ซึ่งตัวของเว็บไซต์จะมีการใช้กราฟ<br />
                 เพื่ออ้างอิงข้อมูลในการแสดงค่าทางสถิติว่าพื้นที่ในส่วนใด ที่มีจำนวนประชากรเป็นผู้สูงอายุมากที่สุด และพื้นที่ใดมีจำนวนน้อยที่สุด<br />
                  นอกจากนี้ยังมีการให้ข้อมูล เกี่ยวกับสิทธิที่พึ่งได้ของผู้สูงอายุ
                </text>
              </div> 
              <button className="btn"/>
            </div>
          </div>
          <Footer />
        </main>



      </div>
    )
  }
}
export default Home
