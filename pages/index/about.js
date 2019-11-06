import React, { useState } from 'react'
import Nav_index from '../../components/nav_index';
import CardAbout from '../../components/layout/cardabout';


const About = () => {

    return (
        <div className="warp-detail">
            <Nav_index />
            <div className="page-detail">
                <div className="container-detail">
                    <div className="item-header">
                        <h3>Eldery DB</h3>
                        <h4>ฐานข้อมูลผู้สูงอายุ และอินโฟกราฟิก</h4>
                    </div>
                </div>

                <div className="card-detail">
                    <CardAbout />
                    <CardAbout />
                    <CardAbout />

                </div>

            </div>


        </div>
    )

}
export default About;