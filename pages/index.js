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
          <Footer />
        </main>



      </div>
    )
  }
}
export default Home
