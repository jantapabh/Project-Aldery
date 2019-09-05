import React from 'react'
import '../styles/base.scss'
import Carousel from '../components/layout/carousel'
import Nav from '../components/nav'

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: global.pageYOffset,
            visible: true,
        };
    }

    componentDidMount() {
        this.index = 1;
        window.addEventListener("scroll", this.handleScroll);


    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible,

        });

    };

    render() {

        return (
            <div>

                <Nav name="about" />
                <div className="warp-about">
                    <Carousel />
                </div>
                <div className="content-about">
                    <div className="content">

                        {/* {
                            this.state.prevScrollpos > 22 && this.index == 1 ?
                                <React.Fragment>
                                    <h3 className="animated fadeInDown delay-1s">ประเทศไทยกับสังคมผู้สูงอายุ</h3>
                                    <p className="animated fadeInDown delay-2s">สังคมผู้สูงอายุ คือ สังคมที่มีประชากรอายุ 60 ปีขึ้นไป
                                    ในอัตราเท่ากับ หรือมากกว่าร้อยละ
                                    10 ของประชากรในพื้นที่นั้น
                                    </p>
                                </React.Fragment>

                                :
                                null
                        } */}
                        <h3>ประเทศไทยกับสังคมผู้สูงอายุ</h3>
                        <p>สังคมผู้สูงอายุ คือ สังคมที่มีประชากรอายุ 60 ปีขึ้นไป
                        ในอัตราเท่ากับ หรือมากกว่าร้อยละ
                        10 ของประชากรในพื้นที่นั้น
                        </p>

                    </div>

                </div>


                <div className="about-chart">
                    <div className="chart">

                    </div>
                </div>


            </div>
        )
    }
}
export default About;

