import React, { Component } from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import ReactTooltip from "react-tooltip"
import Typed from 'react-typed'
import { get } from "axios"
import { feature } from "topojson-client"
import { Motion, spring } from "react-motion"
import Sheetapi from '../../config/api'

const wrapperStyles = {
    // width: "100%",
    maxWidth: 500,
    margin: "0 auto",
    border: "1px solid lightgrey",
}

const colorScale = scaleLinear()
    .domain([1, 150])
    .range([
        "#b3e5b5",
        "#79d27d"
    ])

class Map extends Component {
    constructor() {
        super()
        this.state = {
            population: [],
            geographyPaths: [],
            center: [98.3185, 7.9801249],
            zoom: 40,
            dataList: [
                ["Kamala", "กมลา", "0", "<h6>ตำบล: กมลา </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Kathu", "กะทู้", "0", "<h6>ตำบล: กะทู้ </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Pa Tong", "ป่าตอง", "0", "<h6>ตำบล: ป่าตอง </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Chalong", "ฉลอง", "0", "<h6>ตำบล: ฉลอง </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Ka Ron", "กะรน", "0", "<h6>ตำบล: กะรน </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Ko Kaeo", "เกาะแก้ว", "0", "<h6>ตำบล: เกาะแก้ว </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Ratsada", "รัษฎา", "0", "<h6>ตำบล: รัษฎา </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Rawai", "ราไวย์", "0", "<h6>ตำบล: ราไวย์ </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Talat Nuea", "ตลาดเหนือ", "0", "<h6>ตำบล: ตลาดเหนือ </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Talat Yai", "ตลาดใหญ่", "0", "<h6>ตำบล: ตลาดใหญ่ </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Wichit", "วิชิต", "0", "<h6>ตำบล: วิชิต </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Choeng Tale", "เชิงทะเล", "0", "<h6>ตำบล: เชิงทะเล </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Mai Khao", "ไม้ขาว", "0", "<h6>ตำบล: ไม้ขาว </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Pa Khlok", "ป่าคลอก", "0", "<h6>ตำบล: ป่าคลอก </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Sakhu", "สาคู", "0", "<h6>ตำบล: สาคู </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Si Sunthon", "ศรีสุนทร", "0", "<h6>ตำบล: สาคู </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
                ["Thep Krasatti", "เทพกระษัตรี", "0", "<h6>ตำบล: กมลา </h6>จำนวนผู้สูงอายุ: 0 คน</div>"],
            ]

        }
        this.loadPaths = this.loadPaths.bind(this)
        this.handleZoomIn = this.handleZoomIn.bind(this)
        this.handleZoomOut = this.handleZoomOut.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    async componentDidMount() {
        let userOauth = JSON.parse(localStorage.getItem("myOauth"))
        this.access_token = `${userOauth != null ? userOauth.data.access_token : ""}`
        this.listName('แผนที่!B5:E21')
        this.loadPaths()
    }

    listName = async (v) => {
        try {

            this.list = await Sheetapi.getSheet(this.access_token, v)
            this.setState({ dataList: this.list })
            this.props.onToken(false)

        } catch (err) {
            this.props.onToken(true)
        }
    }

    loadPaths() {
        get("/static/mapjson/phuket.json")
            .then(res => {
                if (res.status !== 200) return
                const world = res.data
                const geographyPaths = feature(
                    world,
                    world.objects[Object.keys(world.objects)[0]]
                ).features
                this.setState({ geographyPaths }, () => {
                    ReactTooltip.rebuild()
                })

            })
    }
    handleZoomIn() {
        this.setState({
            zoom: this.state.zoom * 2,
        })
    }
    handleZoomOut() {
        this.setState({
            zoom: this.state.zoom / 2,
        })
    }
    handleReset() {
        this.setState({
            center: [100, 14],
            zoom: 1,
        })
    }
    render() {

        const { dataList } = this.state
        // if (dataList.length === 0) {
        //     return SpinnerPage()
        // }

        return (
            <React.Fragment >
                <Motion style={wrapperStyles}
                    defaultStyle={{
                        zoom: 1,
                        x: 100,
                        y: 14,
                    }}
                    style={{
                        zoom: spring(this.state.zoom, { stiffness: 100, damping: 14 }),
                        x: spring(this.state.center[0], { stiffness: 100, damping: 14 }),
                        y: spring(this.state.center[1], { stiffness: 100, damping: 14 }),
                    }}
                >
                    {({ zoom, x, y }) => (
                        <ComposableMap
                            projectionConfig={{
                                scale: 3500,
                            }}
                            width={980}
                            height={1045}
                        >
                            <ZoomableGroup center={[x, y]} zoom={zoom}>
                                <Geographies geography={this.state.geographyPaths} disableOptimization>
                                    {(geographies, projection) =>
                                        geographies.map((geography, i) => {
                                            const statePopulation = dataList.find(s =>
                                                s[0] === geography.properties.NAME_3

                                            ) || {}

                                            return (
                                                <Geography
                                                    key={`state-${geography.properties.ID_1}`}
                                                    cacheId={`state-${geography.properties.ID_1}`}
                                                    round
                                                    data-html="true"
                                                    data-tip={statePopulation[3]}
                                                    geography={geography}
                                                    projection={projection}
                                                    style={{
                                                        default: {
                                                            fill: colorScale(+statePopulation[2]),
                                                            stroke: "#40bf45",
                                                            strokeWidth: 0.075,
                                                            outline: "none",
                                                        },
                                                        hover: {
                                                            fill: "#40bf45",
                                                            stroke: "#40bf45",
                                                            strokeWidth: 0.075,
                                                            outline: "none",
                                                        },
                                                        pressed: {
                                                            fill: "#c4def6",
                                                            stroke: "#40bf45",
                                                            strokeWidth: 0.075,
                                                            outline: "none",
                                                        },
                                                    }}
                                                />
                                            )
                                        }
                                        )}
                                </Geographies>
                                <Annotation
                                    dx={280}
                                    dy={440}
                                    subject={[98, 7.93]}
                                    strokeWidth={0}
                                >
                                </Annotation>
                            </ZoomableGroup>
                        </ComposableMap>
                    )}
                </Motion>
                <ReactTooltip />

            </React.Fragment>
        )
    }
}

export default Map
