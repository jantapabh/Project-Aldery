import React, { useState } from 'react'
import { Carousel } from 'rsuite';
import Nav_index from '../../components/nav_index'
import Cardcontact from '../../components/layout/cardcontact'


const Contact = () => {

  const img = [
    { img: "/static/contact1.jpg" },
    { img: "/static/contact2.jpg" },
    { img: "/static/contact3.jpg" },
    { img: "/static/contact4.jpg" },
    { img: "/static/contact5.jpg" },
  ]

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
            <Cardcontact position="กองสวัสดิการสังคม" />
            <Cardcontact position="กองสาธารณสุขและสิ่งแวดล้อม" />


            <Cardcontact position="กองวิชาการและแผนงาน" />
            <Cardcontact position="กองการศึกษา" />
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
export default Contact;