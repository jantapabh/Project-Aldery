import React from 'react'
import Nav_index from '../../components/nav_index'
import { Steps, ButtonGroup, Button } from 'rsuite';
import 'rsuite/lib/styles/index.less';

const styles = {
    width: '200px',
    display: 'inline-table',
    verticalAlign: 'top'
};

class Services extends React.Component {

    constructor() {
        super();
        this.state = {
            step: 0
        };
        this.decline = this.decline.bind(this);
        this.increase = this.increase.bind(this);
    }
    changePercent(nextstep) {
        const step = nextstep < 0 ? 0 : nextstep > 3 ? 3 : nextstep;
        this.setState({
            step
        });
    }
    decline() {
        this.changePercent(this.state.step - 1);
    }
    increase() {
        this.changePercent(this.state.step + 1);
    }


    render() {
        const { step } = this.state;
        return (
            <div className="warp-detail">
                <Nav_index />
                <div className="page-detail">
                    <div className="container-detail">
                        <div className="item-header">
                            <h3>การบริการ และการช่วยเหลือ</h3>

                            <h4>การลงทะเบียน เเละยื่นคำขอรับเบี้ยยังชีพผู้สูงอายุ</h4>
                        </div>
                    </div>
                    <div className="page-content-services">

                        <div className="normal">
                            <ButtonGroup>
                                <Button onClick={this.decline} disabled={this.state.step === 0} appearance={this.state.step !== 0 ? "primary" : ""}>
                                    <h5>Previous</h5>
                                </Button>
                                <Button onClick={this.increase} disabled={this.state.step === 3} >
                                    <h5>Next</h5>
                                </Button>
                            </ButtonGroup>

                            <Steps current={this.state.step}  vertical style={styles} >
                                <Steps.Item title="ลงทะเบียน" description="ลงทะเบียนผ่านเเบบคำขอลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ" />
                                <Steps.Item title="ตรวจสอบคุณสมบัติ" description="จากทะเบียนราษฎร" />
                                <Steps.Item title="บันทึกข้อมูล" description="ลงฐานข้อมูล" />
                                <Steps.Item title="เสนออนุมัติ" description="แจ้งผู้ยื่นขอ / ประกาศรายชื่อผู้มีสิทธิ" />
                            </Steps>
                        </div>

                        <div className="mobile">
                            <ButtonGroup>
                                <Button onClick={this.decline} disabled={this.state.step === 0} appearance={this.state.step !== 0 ? "primary" : ""}>
                                    <h5>Previous</h5>
                                </Button>
                                <Button onClick={this.increase} disabled={this.state.step === 3} >
                                    <h5>Next</h5>
                                </Button>
                            </ButtonGroup>
                            <br />

                            <Steps current={this.state.step} vertical style={styles} >
                                <Steps.Item title="ลงทะเบียน" description="ลงทะเบียนผ่านเเบบคำขอลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ" />
                                <Steps.Item title="ตรวจสอบคุณสมบัติ" description="จากทะเบียนราษฎร" />
                                <Steps.Item title="บันทึกข้อมูล" description="ลงฐานข้อมูล" />
                                <Steps.Item title="เสนออนุมัติ" description="แจ้งผู้ยื่นขอ / ประกาศรายชื่อผู้มีสิทธิ" />
                            </Steps>
                        </div>





                    </div>
                </div>
            </div>
        )
    }
}
export default Services;
