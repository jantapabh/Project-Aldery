import React from 'react'
import Nav from '../components/nav'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import Load from '../components/layout/load';
import Menu_icon from '../components/layout/menu-icon';
import Radialchart from '../components/chart/radialchart';
import Geochart from '../components/chart/geochart';

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

        <div className="box-index">
          <Cover />
          {/* <Menu_icon
            icon={this.state.iconset1}
          />
          <Menu_icon
            icon={this.state.iconset2}
          /> */}

        </div>

      </div>
    )
  }
}
export default Home
