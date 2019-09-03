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
            index: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    //Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible,
            index: this.state.index+1
        });
    };

    render() {
        return (

            <div>

                <Nav name="about" />
                <div className="warp-about">


                    <Carousel />
                </div>
                <br />

                {
                    this.state.prevScrollpos > 95  ?
                        <h1 className="animated fadeInDown delay-1s">hello</h1>
                        :
                        <h1>hello</h1>
                }
                <div className="warp-about">


                    <Carousel />
                </div>

            </div>
        )
    }
}
export default About;

