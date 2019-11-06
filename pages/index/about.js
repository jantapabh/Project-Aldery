import React, { useState } from 'react'
import Nav_index from '../../components/nav_index';
import CardAbout from '../../components/layout/cardabout';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: "1", title: "One", subtitle: "sub-one", img: "", click: "one" },
                { id: "2", title: "Two", subtitle: "sub-two", img: "", click: "two" },
                { id: "3", title: "Three", subtitle: "sub-three", img: "", click: "three" },
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
                            <h3>Eldery DB</h3>
                            <h4>ฐานข้อมูลผู้สูงอายุ และอินโฟกราฟิก</h4>
                        </div>
                    </div>
                    <div className="page-content-detail">
                        <div className={`container-fluid${!this.state.status ? "" : " non"}`}>
                            {
                                this.state.data.map((items, index) => {
                                    return (
                                        <CardAbout
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
export default About;