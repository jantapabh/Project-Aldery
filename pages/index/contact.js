import React, { useState } from 'react'
import Nav_index from '../../components/nav_index'
import Cardcontact from '../../components/layout/cardcontact'


const Contact = () => {

  return (
    <div className="warp-detail">
      <Nav_index />
      <div className="page-detail">
        <div className="container-detail">
          <div className="item-header">
            <h3>การติดต่อสำนักงานเทศบาลเมืองกะทู้ </h3>
            <h4>ตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต</h4>
          </div>
        </div>
        <div className="page-content-contact">
          <Cardcontact position="ฝ่ายสังคม" />
          <Cardcontact position="ฝ่ายสาธารณะสุข" />

        </div>
      </div>
    </div>
  )

}
export default Contact;