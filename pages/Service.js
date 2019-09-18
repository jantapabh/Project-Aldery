import React from 'react'
import Nav from '../components/nav';
import CardService from '../components/layout/cardService';

class Service extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // list: [
            //   {featured:"หน่วยงานที่เกี่ยวข้อง",head:"หน่วยงานภาครัฐ",head2:"หน่วยงานเอกชน"},
            //   {featured:"กองทุน",head:"รัฐบาล",head2:"เอกชน"},
            //   {featured:"สถานพยาบาล",head:"รัฐบาล",head2:"เอกชน"},
            // ]

            list: [{ title: "หน่วยงานที่เกี่ยวข้อง", text: "ทั้งภาครัฐ เเละเอกชน", link: "" },
            { title: "กองทุน", text: "ทั้งภาครัฐ เเละเอกชน", link: "" },
            { title: "สถานพยาบาล", text: "โรงพยาบาลใกล้เคียง เเละสถานดูเเลผู้สูงอายุ", link: "" }]
        }
    }

    render() {

        return (
            <div>
                <Nav name="service" />
                <div className="warp-service">
                    
                </div>

            </div>
        )
    }
}
export default Service


{/* */ }