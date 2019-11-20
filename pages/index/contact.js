import React from 'react'
import { Carousel } from 'rsuite';
import Nav_index from '../../components/nav_index'
import Cardcontact from '../../components/layout/cardcontact'
import Sheetapi from '../../config/api'


class Contact extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      userlist: [],
      img: [
        { img: "/static/contact1.jpg" },
        { img: "/static/contact2.jpg" },
        { img: "/static/contact3.jpg" },
        { img: "/static/contact4.jpg" },
        { img: "/static/contact5.jpg" },
      ]
    }
  }

  async componentDidMount() {
    let userOauth = JSON.parse(localStorage.getItem("myOauth"))
    this.access_token = userOauth.data.access_token
    await this.userList('การติดต่อสำนักงานเทศบาลเมืองกะทู้!B4:G')
  }

  userList = async (value) => {
    try {
      this.list = await Sheetapi.getSheet(this.access_token, value)

      for (let i = 0; i < this.list.length; i++) {
        let value = await {
          รูปภาพ: this.list[i][0],
          คำนำหน้าชื่อ: this.list[i][1],
          ชื่อ: this.list[i][2],
          นามสกุล: this.list[i][3],
          ตำเเหน่ง: this.list[i][4],
          เบอร์ติดต่อ: this.list[i][5],


        }
        this.setState(prevState => ({
          userlist: [...prevState.userlist, value]
        }))
      }

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { userlist, img } = this.state

    console.log(userlist);
    
    return (
      <div className="warp-detail">
        <Nav_index />
        <div className="page-detail">
          <div className="container-detail">
            <div className="item-header">
              <h3>การติดต่อสำนักงานเทศบาลเมืองกะทู้</h3>
              <h4>ตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
            </div>
          </div>
          <div className="page-content-contact">
            <div className="container-fluid-contact">

              {
                userlist.map((item, index) => {
                  return (
                    <Cardcontact
                      img={item.รูปภาพ}
                      title={item.คำนำหน้าชื่อ}
                      name={item.ชื่อ}
                      sername={item.นามสกุล}
                      position={item.ตำเเหน่ง}
                      tel={item.เบอร์ติดต่อ}
                    />
                  )
                })
              }
            </div>


            <div className="timeline-contact">
              <Carousel autoplay className="custom-slider">
                {
                  img.map((item, index) => {
                    return (
                      <img
                        src={item.img}
                        height="250"
                      />
                    )
                  })
                }

              </Carousel>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
export default Contact;