import React from 'react'


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: false
        }
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
                            <li><a href="#">Home</a></li>
                            <li><a href="/mainchart">ข้อมูลทางสถิติ</a></li>
                            <li><a href="/maincard">เบี้ยยังชีพผู้สูงอายุ</a></li>
                        </ul>
                    </div>
                    <div className={`wrapper${this.state.status ? " menuDisplayed" : ""}`}>
                        <nav>
                            <ul>
                                <div className="warp-manu">
                                    <li>
                                        <a href="#" className="menu-toggle" onClick={this.toggle}>
                                            <span className="btn">ppp</span>
                                        </a>
                                    </li>

                                </div>
                            </ul>
                        </nav>
                    </div>

                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            <h1 className="text-center">สังคมผู้สูงอายุ</h1>
                            <h2 className="small text-center">Second Header</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium perferendis maiores velit ad id delectus nisi eligendi doloremque officia necessitatibus, repellendus alias omnis, natus nam voluptates dolor vel minus ab?</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;