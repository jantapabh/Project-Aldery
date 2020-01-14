import React from 'react'
import Link from 'next/link'

class Footer extends React.Component {

    static defaultProps = {
        nameFooter: ""
    }

    render() {

        const { nameFooter } = this.props
        return (
            <div className="warp-footer">
                <div className="chart-source">
                    {
                        nameFooter == "chart" || nameFooter == "doc" || nameFooter == "economy" ?
                            <a
                                target="_blank"
                                href="https://docs.google.com/spreadsheets/d/15bzSXCpQI7qVZyW3-kCQsQ1Qg_6ssRSTa5X4aNavIp8/edit#gid=1593061825">
                                <h6>ที่มา: ข้อมูลทั่วไป</h6>
                            </a>
                            :
                            nameFooter == "service" || nameFooter == "help" ?
                                <a
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/15bzSXCpQI7qVZyW3-kCQsQ1Qg_6ssRSTa5X4aNavIp8/edit#gid=624635023">
                                    <h6>ที่มา: ข้อมูลเกี่ยวกับภาครัฐ</h6>
                                </a>
                                :
                                nameFooter == "hospital" ?
                                    <a
                                        target="_blank"
                                        href="https://docs.google.com/spreadsheets/d/15bzSXCpQI7qVZyW3-kCQsQ1Qg_6ssRSTa5X4aNavIp8/edit#gid=1810336135">
                                        <h6>ที่มา: ข้อมูลด้านสุขภาพ</h6>
                                    </a>
                                    :
                                    nameFooter == "social" ?
                                        <a
                                            target="_blank"
                                            href="https://docs.google.com/spreadsheets/d/15bzSXCpQI7qVZyW3-kCQsQ1Qg_6ssRSTa5X4aNavIp8/edit#gid=610206888">
                                            <h6>ที่มา: ข้อมูลด้านครอบครัวเเละที่อยู่อาศัย</h6>
                                        </a>
                                        :
                                        null

                    }
                    <p>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</p>
                </div>
            </div>
        )
    }
}
export default Footer
