import React from 'react'
import Link from 'next/link';


class CardDepartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img: [
                { pic: "/static/logo-about.png", name: "logo",link:"http://www.dop.go.th/" },
                { pic: "/static/logo-about.png", name: "logo",link:""  },
                { pic: "/static/logo-about.png", name: "logo",link:""  },
                { pic: "/static/logo-about.png", name: "logo",link:""  }
            ]
        }
    }
    render() {
        return (
            <div className="warp-department">
                <h1>หน่วยงานที่เกี่ยวข้อง</h1>
                <div className="card-department">
                    <div className="card-img">
                        {
                            this.state.img.map((item, index) => {
                                return (
                                    <a href={item.link} target="_blank">
                                        <img src={item.pic} alt={item.name} />
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