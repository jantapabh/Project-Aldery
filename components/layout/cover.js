import React from 'react'
import IconData from './icon-data';
import Sheetapi from '../../config/api'


class Cover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: [
                { label: "อายุ60ถึง69ปี", color: "#f44336" },
                { label: "อายุ70ถึง79ปี", color: "#ffc107" },
                { label: "อายุ80ถึง89ปี", color: "#00d084" },
                { label: "อายุมากกว่าหรือเท่ากับ90ปี", color: "#0693e3" }
            ]
        }
    }

    render() {
        return (
            <div className="warp-cover">
                <img src="/static/bg.jpg" />
                <div className="vertical-center">
                    <div className="box">
                        <h1>Elderly Database</h1>
                        <h2>hello world</h2>
                        <div className="box-icon">
                            <IconData
                                icon={this.state.icon}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover;