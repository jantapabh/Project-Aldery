import React from 'react'
import IconData from './icon-data';
import Sheetapi from '../../config/api'


class Cover extends React.Component {

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
                                <IconData />
                            </div>
                            <div className="box-text">
                                <p className="animated fadeInDown delay-2s ">ที่มา: รายงานสรุปยอดผู้ได้รับเบี้ยเเยกตามประเภท อปท. เทศบาลเมืองกะทู้ อ.กะทู้ จังหวัดภูเก็ต</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover;