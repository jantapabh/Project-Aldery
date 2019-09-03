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
        this.index =1;
        window.addEventListener("scroll", this.handleScroll);
        console.log("componentDidMount");
        
        
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
                    <br/><br/> <br/><br/>
                </div>
                <br />

                {
                    this.state.prevScrollpos > 22 && this.index ==1 ?
                        <h1 className="animated fadeInDown delay-1s">hello</h1>
                        :
                        null
                }
               

            </div>
        )
    }
}
export default About;

