import React from 'react'
import NavBar from '../../components/layout/nav'



class Services extends React.Component {

    constructor() {
        super();
        this.state = {
            step: 0,
            message: 0,
            service: [{ name: "หน้าหลัก", href: "/main" },
            { name: "Contact", href: "/index/contact" },]
        };
        this.decline = this.decline.bind(this);
        this.increase = this.increase.bind(this);
    }
    changePercent(nextstep) {
        const step = nextstep < 0 ? 0 : nextstep > 3 ? 3 : nextstep;

        this.setState({
            step,
            message: step
        });
    }
    decline() {
        this.changePercent(this.state.step - 1);
    }
    increase() {
        this.changePercent(this.state.step + 1);
    }


    render() {

        const { step, message } = this.state;
        return (
            <div className="warp-detail">
                <NavBar name="other" tab={this.state.service} />
                <div className="page-detail">
                    <div className="container-detail">
                        <div className="item-header">
                            <h3>การบริการ และการช่วยเหลือ</h3>

                            <h4>การลงทะเบียน เเละยื่นคำขอรับเบี้ยยังชีพผู้สูงอายุ</h4>
                        </div>
                    </div>
                    <div className="page-content-services">

                    </div>
                </div>
            </div>
        )
    }
}
export default Services;