import React from 'react'
import Head from 'next/head'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import Footer from '../components/layout/footer';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
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

        <Head>
          <title>Eldery DB</title>
          <link rel='icon' href='/static/favicon.ico' />
        </Head>

        <Nav_index name="/" />
        <main>
          <Cover />
        </main>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSfx44Vbst39S5gSLKqbo4kbqpgDo0rdE',
})(Home)