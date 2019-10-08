import React from 'react'
import '../styles/main.scss'
import Nav from '../components/nav';
import SideBar from '../components/layout/sidebar';


class Main extends React.Component {

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


