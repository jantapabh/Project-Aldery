import React from 'react'
import { Tag, TagGroup, Timeline, Carousel } from 'rsuite';
import 'rsuite/lib/styles/index.less';

class Cardcontact extends React.Component {

    static defaultProps = {

        img: "/static/Profile.svg",
        title: "",
        name: "xxx ",
        sername: "xxxx",
        position: "",
        tel: "06-xxxxxx-xx"

    }

    render() {

        const { img, title, name, sername, position, tel } = this.props

        return (
            <React.Fragment>
                <div className="warp-card-contact">
                    <div className="card-contact">
                        <div className="contact">
                            <div className="contact-img">
                                <img src={img} alt="pic" />
                            </div>
                            <div className="contact-data">
                                <h4>{title}{name} {sername}</h4>

                                <TagGroup>
                                    {
                                        position == "กองสวัสดิการสังคม" ?
                                            <Tag color="yellow">กองสวัสดิการสังคม</Tag>
                                            :
                                            position == "กองสาธารณสุขและสิ่งแวดล้อม" ?
                                                <Tag color="green">กองสาธารณสุขและสิ่งแวดล้อม</Tag>
                                                :
                                                position == "กองวิชาการและแผนงาน" ?
                                                    <Tag color="blue">กองวิชาการและแผนงาน</Tag>
                                                    :
                                                    position == "กองการศึกษา" ?
                                                        <Tag color="orange">กองการศึกษา</Tag>
                                                        :
                                                        null
                                    }
                                </TagGroup>
                                {/* <text>""</text> */}
                                <h6>เบอร์โทรติดต่อ: {tel}</h6>
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