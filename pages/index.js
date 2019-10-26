import React from 'react'
import Sheetapi from '../config/api'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// const LoadingContainer = (props) => (
//   <div>Fancy loading container!</div>
// )

const mapStyles = {
  width: '100%',
  height: '100%',
};

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

  collapsible = async () => {
    if (!this.state.status) {
      await this.setState({
        status: true
      })
    }
    else {
      await this.setState({
        status: false
      })
    }
  }


  render() {


    return (
      <div className="warp-index">
        <nav>
          <ul>
            <div className="nav-logo">
              <Link href="/">
                <li>
                  <img src="/static/cover-img5.png"></img>
                  <p>Eldery DB</p>
                </li>
              </Link>
            </div>

            <div className="warp-manu">
              <ul>
                <li>
                  <p><AnchorLink href='#about'>About</AnchorLink></p>
                  <p><AnchorLink href='#project'>Project</AnchorLink></p>
                  <p><AnchorLink href='#services'>Services</AnchorLink></p>
                  <p><AnchorLink href='#contact'>Contact</AnchorLink></p>
                </li>
              </ul>

            </div>
          </ul>
        </nav>
        <div class="collapsible-menu">

          <div className="warp-nav-sidebar">
            <div className="nav-logo">
              <Link href="/">
                <li>
                  <img src="/static/cover-img5.png"></img>
                  <p>Eldery DB</p>
                </li>
              </Link>
            </div>
            <div className="box-hamberger">
              <a className={`hamberger btn${this.state.status ? " active" : " not-active"}`} onClick={this.collapsible} >
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
          <div className={`menu-content${this.state.status ? " show" : ""}`}>
            <ul>
              <li >
                <p><AnchorLink href='#about'>About</AnchorLink></p>
                <p><AnchorLink href='#project'>Project</AnchorLink></p>
                <p><AnchorLink href='#services'>Services</AnchorLink></p>
                <p><AnchorLink href='#contact'>Contact</AnchorLink></p>
              </li>
            </ul>
          </div>
        </div>

        <main>
          <Header />
          <section id='about'>
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
                <Link href="/main">
                  <button className="btn-outline-center" >หน้าหลัก</button>
                </Link>

              </div>
            </div>
          </section>

          <section id='project'>
            <div className="page-content-map">
              <div className="container-fluid">
                <h1>Project</h1>
              </div>
            </div>
          </section>

          <section id='services'>
            <div className="page-content-map">
              <div className="container-fluid">
                <h1>Services</h1>
              </div>
            </div>
          </section>

          <section id='contact'>
            <div className="page-content-map">
              <div className="container-fluid">
                <div className="container-text">
                  <h1>Contact</h1>
                <h6>สำนักงานเทศบาลเมืองกะทู้ 12 หมู่ 2 ถนนวิชิตสงคราม ตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต 83120<br/> โทรศัพท์ 076-321500 โทรสาร 076-322129 , 076-322126.</h6>
                </div>
                
              </div>
              <div className="container-fluid">
                <Map
                  className={'map'}
                  google={this.props.google}
                  zoom={12}
                  style={mapStyles}
                  initialCenter={{ lat: 7.9082054, lng: 98.3349746 }}

                >
                  <Marker
                    title={'สำนักงานเทศบาลเมืองกะทู้ ตำบล กะทู้ อำเภอกะทู้ ภูเก็ต'}
                    name={'สำนักงานเทศบาลเมืองกะทู้ ตำบล กะทู้ อำเภอกะทู้ ภูเก็ต'}
                    position={{ lat: 7.9111378, lng: 98.3452833 }}
                  />
                </Map>


              </div>




            </div>
          </section>


          <Footer />
        </main>



      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSfx44Vbst39S5gSLKqbo4kbqpgDo0rdE',
  // LoadingContainer: LoadingContainer
})(Home)