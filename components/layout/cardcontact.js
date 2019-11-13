import React from 'react'
import { Tag, TagGroup, Timeline, Carousel } from 'rsuite';
import 'rsuite/lib/styles/index.less';

class Cardcontact extends React.Component {

    static defaultProps = {
        position: "",
        name: "นางสาวxxx xxxx",
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
                                        this.props.position == "กองสวัสดิการสังคม" ?
                                            <Tag color="yellow">กองสวัสดิการสังคม</Tag>
                                            :
                                            this.props.position == "กองสาธารณสุขและสิ่งแวดล้อม" ?
                                                <Tag color="green">กองสาธารณสุขและสิ่งแวดล้อม</Tag>
                                                :
                                                this.props.position == "กองวิชาการและแผนงาน" ?
                                                    <Tag color="blue">กองวิชาการและแผนงาน</Tag>
                                                    :
                                                    this.props.position == "กองการศึกษา" ?
                                                        <Tag color="orange">กองการศึกษา</Tag>
                                                        :
                                                        null
                                    }
                                </TagGroup>
                                {/* <text>""</text> */}
                                <h6>เบอร์โทรติดต่อ: 06-xxxxxx-xx</h6>
                            </div>

                            <div className="contact-icon">
                            </div>

                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
export default Cardcontact;