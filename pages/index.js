import React from 'react'
import Sheetapi from '../config/api'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Link from 'next/link'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Nav from '../components/nav';

const center = { lat: 7.9082054, lng: 98.3349746 };
const mapStyles = {
  width: '100%',
  height: '100%',
};

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      link: ["/index/about","/index/project","/index/services","/index/contact"]
    };
  }

  async componentDidMount() {
    await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

  }

  onMarkerClick = (props, marker, e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        selectedPlace: props,
        activeMarker: null,
        showingInfoWindow: false
      });
    }

    else {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
  }

  render() {


    const {link} = this.state

    return (
      <div className="warp-index">
        <Nav name="/" />
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

                <Link href={link[0]} >
                  <button className="btn-outline-center" >อ่านต่อ</button>
                </Link>
                <Link href="/main">
                  <button className="btn-outline-center" >หน้าหลัก</button>
                </Link>


              </div>
            </div>
          </section>

          <section id='project'>
            <div className="page-content">
              <div className="container-fluid">
                <h1>Project</h1>

                <div className="page-content-data">
                  <div className="container-fluid">
                    {/* <div className="card-img">
                      <img src="/static/cover-img2.png" className="card-img-top" alt="..." />
                    </div> */}

                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id='services'>
            <div className="page-content">
              <div className="container-fluid">
                <h1>Services</h1>
                <Link href={link[2]} >
                  <button className="btn-outline-center" >อ่านต่อ</button>
                </Link>
                <div className="page-content-data">

                  <div className="container-fluid">
                    <div className="card">
                      <img src="/static/cover-img2.png" className="card-img-top" alt="..." />
                      <div class="card-body">
                        <h6 class="card-text">ปรึกษาปัญหา</h6>
                      </div>
                    </div>
                    <div className="card">
                      <img src="/static/cover-img.png" className="card-img-top" alt="..." />
                      <div class="card-body">
                        <h6 class="card-text">การช่วยเหลือ</h6>
                      </div>
                    </div>
                    <div className="card">
                      <img src="/static/cover-img6.png" className="card-img-top" alt="..." />
                      <div class="card-body">
                        <h6 class="card-text">การดูเเล</h6>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id='contact'>
            <div className="page-content-map">
              <div className="container-fluid">
                <div className="container-text">
                  <h1>Contact</h1>
                  <h6>สำนักงานเทศบาลเมืองกะทู้ 12 หมู่ 2 ถนนวิชิตสงคราม ตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต 83120<br /> โทรศัพท์ 076-321500 โทรสาร 076-322129 , 076-322126.</h6>
                  <div className="btn-center">
                    <Link href={link[3]}>
                      <button className="btn-outline-center" >อ่านต่อ</button>
                    </Link>
                  </div>

                </div>
              </div>

              <div className="container-fluid">

                <Map
                  className={'map'}
                  google={this.props.google}
                  zoom={12}
                  style={mapStyles}
                  initialCenter={center}
                >
                  <Marker
                    onClick={this.onMarkerClick}
                    name={'สำนักงานเทศบาลเมืองกะทู้ ตำบล กะทู้ อำเภอกะทู้ ภูเก็ต'}
                    position={{ lat: 7.9111378, lng: 98.3452833 }}
                  />

                  <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                  >
                    <div>
                      <a href="https://www.google.co.th/maps/place/%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89/@7.9111431,98.3452833,17z/data=!3m1!4b1!4m5!3m4!1s0x3050305d21d9042d:0x24ca59f8b15d6fde!8m2!3d7.9111378!4d98.347472?hl=th">
                        <h6 >{this.state.selectedPlace.name}</h6>
                      </a>

                    </div>
                  </InfoWindow>
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
})(Home)