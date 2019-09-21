import React from 'react'
import IconData from './icon-data';
import Sheetapi from '../../config/api'


class Cover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: [
                { label: "อายุ60ถึง69ปี", color: "#f44336", bgColor:"#fad0c3" },
                { label: "อายุ70ถึง79ปี", color: "#ffc107", bgColor:"#fef3bd" },
                { label: "อายุ80ถึง89ปี", color: "#00d084", bgColor:"#c1e1c5" },
                { label: "อายุ >= 90ปี", color: "#0693e3", bgColor:"#c4def6" }
            ],
       
        }
    }

    render() {

        return (
            <div className="warp-cover">
                <div className="vertical-center">
                    <div className="box">
                        <div className="box-content">
                            <div className="box-text">
                                <h1 className="animated fadeInDown delay-1s ">Elderly Database</h1>
                                <h2 className="animated fadeInDown delay-1s ">present</h2>
                            </div>

                            <div className="box-icon">
                                <IconData
                                    icon={this.state.icon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover;