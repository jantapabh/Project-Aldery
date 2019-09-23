import React from 'react'

class SideBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: "ข้อมูลทางสถิติ", href: "#ข้อมูลทางสถิติ" },
                { name: "เบี้ยยังชีพผู้สูงอายุ", href: "#เบี้ยยังชีพผู้สูงอายุ" }
            ]
        }
    }


    render() {
        return (
            <div className="warp-sidebar">
                <div className="sidebar">
                    <div className="sidebar-list">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <a href={item.href} key={index}>{item.name}</a>
                                )
                            })
                        }
                    </div>



                </div>
            </div>
        )
    }
}
export default SideBar;