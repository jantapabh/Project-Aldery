import React, { useState } from 'react'
import Nav_index from '../../components/nav_index';
import CardProject from '../../components/layout/cardProject';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: "1", title: "การตรวจสุขภาพประจำปี", subtitle: "จากหน่วยงานอนามัยใกล้บ้าน", img: "/static/project1.jpg", click: "Click" },
                { id: "2", title: "โครงการอบรมวิชาชีพ", subtitle: "เพื่อการมีรายได้ เเละลดการขาดแคลนแรงงาน", img: "/static/project2.png", click: "Click" },
                { id: "3", title: "สถานสงเคราะห์", subtitle: "การดูเเล เเละการจัดการ", img: "/static/project3.png", click: "Click" },
            ],
            status: false
        }
    }

    onConfirm = (order) => {
        this.setState({
            status: order,
        })
    }

    render() {
        return (
            <div className="warp-detail">
                <Nav_index />
                <div className="page-detail">
                    <div className="container-detail">
                        <div className="item-header">
                            <h3>ข่าวสาร เเละกิจกรรม</h3>
                            <h4>เพื่อผู้สูงอายุ และครอบครัว</h4>
                        </div>
                    </div>
                    <div className="page-content-detail">
                        <div className={`container-fluid${!this.state.status ? "" : " non"}`}>
                            {
                                this.state.data.map((items, index) => {
                                    return (
                                        <CardProject
                                            key={index}
                                            id={items.id}
                                            title={items.title}
                                            subtitle={items.subtitle}
                                            img={items.img}
                                            click={items.click}
                                            confirm={this.onConfirm}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }



}
export default Project;