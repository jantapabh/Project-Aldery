import React from 'react'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import Footer from '../components/layout/footer';
import Link from 'next/link'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Nav from '../components/nav';
import Nav_index from '../components/nav_index';

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
      link: ["/index/about", "/index/project", "/index/services", "/index/contact"]
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


    const { link } = this.state

    return (
      <div className="warp-index">
        <Nav_index />
        <main>
          <Cover />

          {/* <div className="container-fluid">

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

              </div> */}

          <Footer />
        </main>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSfx44Vbst39S5gSLKqbo4kbqpgDo0rdE',
})(Home)