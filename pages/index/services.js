import React from 'react'
import Nav_index from '../../components/nav_index'
import { Steps, ButtonGroup, Button, Message } from 'rsuite';
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
            step: 0,
            message: 0
        };
        this.decline = this.decline.bind(this);
        this.increase = this.increase.bind(this);
    }
    changePercent(nextstep) {
        const step = nextstep < 0 ? 0 : nextstep > 3 ? 3 : nextstep;

        console.log("STEP", step);

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
        console.log(this.state.message);

        const { step, message } = this.state;
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
                                <Button onClick={this.decline} disabled={step === 0} appearance={step !== 0 ? "primary" : ""}>
                                    <h5>Previous</h5>
                                </Button>
                                <Button onClick={this.increase} disabled={step === 3} >
                                    <h5>Next</h5>
                                </Button>
                            </ButtonGroup>

                            <Steps current={step} vertical style={styles} >
                                <Steps.Item title="ลงทะเบียน" description="ลงทะเบียนผ่าน เเบบคำขอลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ" />
                                <Steps.Item title="ตรวจสอบคุณสมบัติ" description="จากทะเบียนราษฎร" />
                                <Steps.Item title="บันทึกข้อมูล" description="ลงฐานข้อมูล" />
                                <Steps.Item title="เสนออนุมัติ" description="แจ้งผู้ยื่นขอ / ประกาศรายชื่อผู้มีสิทธิ" />
                            </Steps>
                        </div>

                        <div className="normal-message">

                            <Message
                                type="info"
                                title="การลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ"
                                description={
                                    <p>
                                        <h4>หลักฐาน</h4>
                                        <h5>
                                            1. บัตรประจำตัวประชานน หรือบัตรที่มีรูปถ่ายที่ออกโดยหน่วยงานรัฐพร้อมสำเนา<br />
                                            2. ทะเบียนบ้านพร้อมสำเนา<br />
                                            3. สมุดบัญชีธนาคาร พร้อมสำเนา (กรณีรับเงินผ่านธนาคาร)
                                            </h5>


                                        <br />
                                        <h4>แบบฟอร์มที่เกี่ยวข้อง</h4>

                                        <a href="#">เเบบคำขอลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ</a>
                                        <a href="#">หนังสือมอบอำนาจ</a>
                                    </p>
                                }
                            />

                            {
                                message == 1 ?
                                    <Message
                                        type="warning"
                                        title="คุณสมบัติ"
                                        description={
                                            <p>
                                                <h5>
                                                    1. มีสัญชาติไทย อายุหกสิบปีบริบูรณ์ขึ้นไป<br />
                                                    2. มีภูมิลำเนาอยู่ในเขตองค์การปกครองส่วนท้องถิ่นตามทะเบียนบ้าน<br />
                                                    3. ไม่เป็นผู้ได้รับสวัสดิการ หรือสิทธิประโยชน์อื่นใดจากหน่วยงานของรัฐ<br />
                                                    รัฐวิสาหกิจ หรือองค์กรปกครองส่วนท้องถิ่น เช่น ผู้ได้รับเงินบำนาญ เบี้ยวัด<br />
                                                    ผู้ที่อยู่อาศัยในสถานสงเคราะห์ของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น

                                                </h5>
                                                <p>ยกเว้นผู้พิการ เเละผู้ป่วยเอดส์</p>
                                            </p>
                                        }
                                    />
                                    :

                                    // message == 2 ?
                                    //     <Message
                                    //         type="error"
                                    //         title="Error"
                                    //         description={
                                    //             <p>
                                    //                 <h5>Additional description and informations about copywriting.</h5>
                                    //                 <br />
                                    //                 <a href="#">This is a Link.</a>
                                    //             </p>
                                    //         }
                                    //     />
                                    //     :
                                        message == 3 ?
                                            <Message
                                                type="success"
                                                title="ประกาศรายชื่อผู้ที่มีสิทธิ"
                                                description={
                                                    <p>
                                                        <br />
                                                        <a href="/main/mantable">รายชื่อเพศชาย</a>
                                                        <a href="/main/womantable">รายชื่อเพศหญิง</a>
                                                        <a href="/main/totaltable">รายชื่อรวม</a>
                                                    </p>
                                                }
                                            />
                                            :
                                            null
                            }

                        </div>

                        <div className="mobile">
                            <ButtonGroup>
                                <Button onClick={this.decline} disabled={step === 0} appearance={step !== 0 ? "primary" : ""}>
                                    <h5>Previous</h5>
                                </Button>
                                <Button onClick={this.increase} disabled={step === 3} >
                                    <h5>Next</h5>
                                </Button>
                            </ButtonGroup>
                            <br />

                            <Steps current={step} vertical style={styles} >
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
