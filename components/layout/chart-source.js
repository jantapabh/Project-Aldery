

const ChartSource = () => {
    return (
        <React.Fragment>
            <div className="data-source" >
                <a
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/15bzSXCpQI7qVZyW3-kCQsQ1Qg_6ssRSTa5X4aNavIp8/edit?usp=sharing">
                    <img src="/static/logo-google-sheets.svg" />
                </a>

                <div className="text-source">
                    <h6 >ที่มา: แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ ผู้พิการเเละผู้ป่วยในชุมชน</h6>
                    <h6>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</h6>
                </div>

            </div>
        </React.Fragment>
    )
}
export default ChartSource;