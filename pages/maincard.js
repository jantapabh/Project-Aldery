import React from 'react'
import Sheetapi from '../config/api'
import CardMain from '../components/layout/cardmain';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: [
                { name: "card1", img: "/static/grandfather.svg", text: "เพศชาย", url: "/mantable", hover: "one" },
                { name: "card2", img: "/static/old-woman.svg", text: "เพศหญิง", url: "/womantable", hover: "two" },
                { name: "card3", img: "/static/couple.svg", text: "รวม", url: "", hover: "three" },],

            status: true

        }
    }

    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))

    }


    toggle = async () => {
        if (!this.state.status) {
            await this.setState({
                status: true
            })
        }
        else {
            await this.setState({
                status: false
            })
        }
    }

    render() {

        return (

            <div className="warp-main">
                <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                    <div className="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li><img src="/static/home.svg" /><a href="/">หน้าหลัก</a></li>
                            <li><img src="/static/chart.svg" /><a href="/mainchart">ข้อมูลทางสถิติ</a></li>
                            <li><img src="/static/document.svg" /><a href="/maincard">เบี้ยยังชีพผู้สูงอายุ</a></li>
                        </ul>
                        <ul className="non-sidebar-nav">
                            <div className="icon-sidebar">
                                <li><img src="/static/home.svg" /></li>
                                <p>HOME</p>
                            </div>
                            <div className="icon-sidebar">
                                <li><img src="/static/chart.svg" /></li>
                                <p>CHART</p>
                            </div>
                            <div className="icon-sidebar">
                                <li><img src="/static/document.svg" /></li>
                                <p>DOC</p>
                            </div>

                        </ul>
                    </div>
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav>
                            <ul>
                                <div className="warp-manu">
                                    <li>
                                        <div className="box-hamberger">
                                            <a className={`hamberger btn${this.state.status ? " active" : " not-active"}`} onClick={this.toggle} >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </a>
                                        </div>
                                    </li>

                                </div>
                            </ul>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                           
                                <CardMain
                                    card={this.state.card}
                                />

                       

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main

