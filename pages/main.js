import React from 'react'
import '../styles/main.scss'
import Nav from '../components/nav';
import SideBar from '../components/layout/sidebar';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: [
                { name: "card1", img: "/static/grandfather.svg", text: "เพศชาย", url: "/mantable", hover: "one" },
                { name: "card2", img: "/static/old-woman.svg", text: "เพศหญิง", url: "/womantable", hover: "two" },
                { name: "card3", img: "/static/couple.svg", text: "รวม", url: "/totaltable", hover: "three" },],

        }
    }

    render() {

        return (
            <div className="warp-main">
                <Nav />
                <div className="main">
                    <SideBar />
                    <div class="content-text">
                           <h1>สังคมผู้สูงอายุ</h1>
                    </div>

                </div>




            </div>
        )
    }
}
export default Main


