import React from 'react'
import Nav from '../components/nav'
import '../styles/base.scss'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';

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
        <Nav name = "main" />
        <Cover/>
        

      </div>
    )
  }
}
export default Home
