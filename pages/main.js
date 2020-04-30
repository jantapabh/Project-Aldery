import React from 'react'
import Dashboard from '../components/layout/dashboard';

const MainPage = () => {

    const header = "ยินดีต้อนรับเข้าสู่"
    const subHead = "เว็บฐานข้อมูลผู้สูงอายุ ภายในอำเภอกะทู้ จังหวัดภูเก็ต"

    return (
        <React.Fragment>
            {
                typeof document === 'undefined' ?
                    null :
                    <Dashboard>
                        <div className="warp-main">

                            <React.Fragment>
                                <div className="page-content-main">
                                    <div className="container-fluid-main">
                                        <h1 className="text-center">{header}</h1>
                                        <h2 className="small text-center">{subHead}</h2>
                                        <div className="content-main">
                                            <div className="content-main-left">
                                                <img src="../static/img-main.png" alt="img-main" />
                                            </div>
                                            <div className="content-main-left">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </React.Fragment>

                        </div >
                    </Dashboard>
            }
        </React.Fragment>
    )
}
export default MainPage;