import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li><img src="/static/home.svg" /><a href="/">หน้าหลัก</a></li>
                    <li><img src="/static/dashboard.svg" /><a href="/main">รายงานความคืบหน้า</a></li>
                    <li><img src="/static/chart.svg" /><a href="/mainchart">ข้อมูลทางสถิติ</a></li>
                    <li><img src="/static/document.svg" /><a href="/maindoc">สวัสดิการจากรัฐ</a></li>
                    <li><img src="/static/service.svg" /><a href="/service">การบริการ</a></li>
                    <li><img src="/static/hospital.svg" /><a href="/hospital">โรงพยาบาล</a></li>
                    <li><img src="/static/help.svg" /><a href="/help">ช่วยเหลือ</a></li>
                </ul>
                <ul className="non-sidebar-nav">
                    <div className="icon-sidebar">
                        <li><img src="/static/home.svg" /></li>
                        <p>HOME</p>
                    </div>
                    <div className="icon-sidebar">
                        <li><img src="/static/dashboard.svg" /></li>
                        <p>dashboard</p>
                    </div>
                    <div className="icon-sidebar">
                        <li><img src="/static/chart.svg" /></li>
                        <p>CHART</p>
                    </div>
                    <div className="icon-sidebar">
                        <li><img src="/static/document.svg" /></li>
                        <p>Benefits</p>
                    </div>
                    <div className="icon-sidebar">
                        <li><img src="/static/service.svg"  /></li>
                        <p>Service</p>
                    </div>
                    <div className="icon-sidebar">
                        <li><img src="/static/hospital.svg"  /></li>
                        <p>Hospital</p>
                    </div>
                    <div className="icon-sidebar">
                        <li><img src="/static/help.svg" /></li>
                        <p>HELP</p>
                    </div>

                </ul>
            </div>
        )
    }
}
export default Sidebar;