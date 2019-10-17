import React from 'react'
import Nav from '../components/nav'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';

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
         
        </div>

      </div>
    )
  }
}
export default Home
