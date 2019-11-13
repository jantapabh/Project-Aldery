import React from 'react'
import { Tag, TagGroup, Timeline, Carousel } from 'rsuite';
import 'rsuite/lib/styles/index.less';

class Cardcontact extends React.Component {

    static defaultProps = {
        position: "",
        name: "นางสาวภัทนรินทร์ สุเภากิจ",
        subtitle: "",
        img: "/static/Profile.svg"

    }

    render() {

        return (
            <React.Fragment>
                <div className="warp-card-contact">
                    <div className="card-contact">
                        <div className="contact">
                            <div className="contact-img">
                                <img src={this.props.img} alt="pic" />
                            </div>
                            <div className="contact-data">
                                <h4>{this.props.name}</h4>

                                <TagGroup>
                                    {
                                        this.props.position == "ฝ่ายสังคม" ?
                                            <Tag color="yellow">ฝ่ายสังคม</Tag>
                                            :
                                            this.props.position == "ฝ่ายสาธารณะสุข" ?
                                                <Tag color="green">ฝ่ายสาธารณะสุข</Tag>
                                                :
                                                null
                                    }
                                    {/* <Tag color="red">Red</Tag>
                                    <Tag color="yellow">Yellow</Tag>

                                    <Tag color="blue">Blue</Tag>
                                    <Tag color="violet">Violet</Tag> */}
                                </TagGroup>
                                {/* <text>""</text> */}
                                <h6>เบอร์โทรติดต่อ: 06-xxxxxx-xx</h6>
                            </div>

                            <div className="contact-icon">
                            </div>

                        </div>
                    </div>

                </div>

                {/* 
                <div className="timeline-contact">
                   
                </div> */}
            </React.Fragment>

        )
    }
}
export default Cardcontact;