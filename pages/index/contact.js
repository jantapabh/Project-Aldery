import React, { useState } from 'react'
import { Carousel } from 'rsuite';
import Nav_index from '../../components/nav_index'
import Cardcontact from '../../components/layout/cardcontact'


const Contact = () => {

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
              <img
                src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
                height="250"
              />
              <img
                src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
                height="250"
              />
              <img
                src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
                height="250"
              />
              <img
                src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
                height="250"
              />
              <img
                src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
                height="250"
              />
            </Carousel>
          </div>


        </div>
      </div>
    </div>
  )

}
export default Contact;