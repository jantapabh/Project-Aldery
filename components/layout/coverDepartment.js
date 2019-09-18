import React from 'react'


class CardDepartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img: [
                { pic: "/static/logo-about.png", name: "ผส.",link:"http://www.dop.go.th/" },
                { pic: "/static/logo-about4.png", name: "หลักประกันสุขภาพแห่งชาติ",link:"https://www.nhso.go.th/"  },
                { pic: "/static/logo small.jpg", name: "กองทุนผู้สูงอายุ",link:"http://www.olderfund.dop.go.th/"  },
                { pic: "/static/logo-about2.png", name: "มูลนิธิสถาบันวิจัยและพัฒนาผู้สูงอายุไทย",link:"http://thaitgri.org/"  },
            ]
        }
    }
    render() {
        return (
            <div className="warp-department">
                <h1 className="icon animated fadeInDown delay-1s">หน่วยงานที่เกี่ยวข้อง</h1>
                <div className="card-department">
                    <div className="card-img icon animated fadeInDown delay-1s">
                        {
                            this.state.img.map((item, index) => {
                                return (
                                    <a key={index} href={item.link} target="_blank"  title={item.name}>
                                        <img className={`img-${index}`} src={item.pic} alt={item.name} />
                                    </a>

                                )
                            })
                        }

                    </div>
                </div>

            </div>
        )
    }
}
export default CardDepartment;