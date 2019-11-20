import React from 'react'
import Sheetapi from '../../config/api'

class CardProject extends React.Component {

    static defaultProps = {
        id: "",
        title: "Special title treatment",
        img: "",
        click: "Go somewhere"
    }

    constructor(props) {
        super(props);
        this.state = {
            id: "0",
            status: false,
            data: [],
            dataWork: [],
            dataService: []
        }
    }

    setStatus = (value) => {

        if (this.state.id == this.props.id) {
            if (!this.state.status) {
                this.setState({
                    status: true
                })
                this.props.confirm(true)
            }

            else {
                this.setState({
                    status: false
                })
                this.props.confirm(false)
            }
        }

        else {

            if (!this.state.status) {
                this.setState({
                    status: true
                })
                this.props.confirm(true)

            }

            else {
                this.setState({
                    status: false
                })
                this.props.confirm(false)
            }

        }

        this.setState({
            id: value.target.id
        })
    }

    async componentDidMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = userOauth.data.access_token
        await this.dataListhelp('ข่าวสารเเละกิจกรรม!A5:E')
        await this.dataListwork('ข่าวสารเเละกิจกรรม!H5:L')
        await this.dataListservice('ข่าวสารเเละกิจกรรม!O5:P')
    }

    dataListhelp = async (value) => {
        try {
            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ชื่อโครงการ: this.list[i][0],
                    วันที่: this.list[i][1],
                    เวลา: this.list[i][2],
                    สถานที่จัดงาน: this.list[i][3],
                    หมายเหตุ: this.list[i][4],
                }
                this.setState(prevState => ({
                    data: [...prevState.data, value]
                }))
            }

        } catch (err) {
            console.log(err);
        }
    }

    dataListwork = async (value) => {
        try {
            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ชื่อโครงการ: this.list[i][0],
                    วันที่: this.list[i][1],
                    เวลา: this.list[i][2],
                    สถานที่จัดงาน: this.list[i][3],
                    หมายเหตุ: this.list[i][4],
                }
                this.setState(prevState => ({
                    dataWork: [...prevState.dataWork, value]
                }))
            }

        } catch (err) {
            console.log(err);
        }
    }

    dataListservice = async (value) => {
        try {
            this.list = await Sheetapi.getSheet(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    ชื่อสถานสงเคราะห์: this.list[i][0],
                    เบอร์ติดต่อ: this.list[i][1],
                }
                this.setState(prevState => ({
                    dataService: [...prevState.dataService, value]
                }))
            }

        } catch (err) {
            console.log(err);
        }
    }

    render() {

        const { id, img, title, subtitle, click } = this.props
        const { data, dataWork, dataService } = this.state

        return (
            <React.Fragment>
                <div className={`${!this.state.status ? "non" : "show"}`}>

                    {
                        !this.state.status ?
                            <div className="warp-card">
                                <div className="card-group">
                                    <div class="card">
                                        <img src={img} />
                                        <div class="card-body">
                                            <h5 class="card-title">{title}</h5>
                                            <p class="card-text">{subtitle}</p>
                                            <a class="btn btn-primary" id={id} onClick={this.setStatus}>{click}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null

                    }

                    {
                        id == this.state.id && this.state.status ?

                            <div className="container-detail animated  fadeIn">
                                <div className="item-header">
                                    <h5 class="card-title">{title}</h5>
                                    <p class="card-text">{subtitle}</p>
                                    {
                                        id == "1" ?
                                            data.map((item, index) => {
                                                return (
                                                    <div className="text-group">
                                                        <text>
                                                            ชื่อโครงการ: {item.ชื่อโครงการ}<br />
                                                            วันที่: {item.วันที่} เวลา:{item.เวลา}<br />
                                                            สถานที่จัดงาน: {item.สถานที่จัดงาน}<br />
                                                            หมายเหตุ: {item.หมายเหตุ}
                                                        </text>
                                                    </div>
                                                )
                                            })
                                            :
                                            id == "2" ?
                                                dataWork.map((item, index) => {
                                                    return (
                                                        <div className="text-group">
                                                            <text>
                                                                ชื่อโครงการ: {item.ชื่อโครงการ}<br />
                                                                วันที่: {item.วันที่} เวลา:{item.เวลา}<br />
                                                                สถานที่จัดงาน: {item.สถานที่จัดงาน}<br />
                                                                หมายเหตุ: {item.หมายเหตุ}
                                                            </text>
                                                        </div>
                                                    )
                                                })
                                                :
                                                id == "3" ?
                                                    dataService.map((item, index) => {
                                                        return (
                                                            <div className="text-group">
                                                                <text>
                                                                    ชื่อสถานสงเคราะห์: {item.ชื่อสถานสงเคราะห์}<br />
                                                                    เบอร์ติดต่อ: {item.เบอร์ติดต่อ}
                                                                </text>
                                                            </div>
                                                        )
                                                    })
                                                    :
                                                    null

                                    }
                                </div>
                                <div className="btn-close">
                                    <button type="button" class="close" id={id} onClick={this.setStatus} aria-label="Close"   >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                            </div>
                            :
                            null

                    }
                </div>
            </React.Fragment>
        )
    }
}
export default CardProject;