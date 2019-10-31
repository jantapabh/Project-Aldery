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
import axios from 'axios';

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
    border: "1px solid lightgrey",
}

const colorScale = scaleLinear()
    .domain([1, 1200])
    .range(["#85C1E9", "#2471A3"])

const SpinnerPage = () => {
    return (
        <>
            <div>
                <Typed
                    strings={['Please wait...', 'loading...']}
                    typeSpeed={40}
                />
            </div>
        </>
    );
}

const sheetId = '1gSVQSRjaC5kNE0jolNYsZyaM8Y5dhsFxVr42-TJjk_E';
const sheetName = 'Visualization';
const API = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}`
const URL = 'https://docs.google.com/spreadsheets/d/1Ov1P86sWVU01OHKpCBBYTbZwtB9WHxeoRG2wfwsvOPw/edit#gid=355341358'
const urlpost = 'https://www.googleapis.com/oauth2/v4/token/?client_secret=TQ36Y7Jn0kdPjJ2dwl5nbHp-&grant_type=refresh_token&refresh_token=1//04X47z_dpQ-qmCgYIARAAGAQSNwF-L9Ir8Udetetcz-5EWxWI8LB9dMHcuOv9E5TFIk0lM5ptyDttdL6VigI9uF8k421N4sGTnmo&client_id=972202685112-andj9oha8pq3v0emis1702dkfhas0o4m.apps.googleusercontent.com'


class StudentMap extends Component {
    constructor() {
        super()
        this.state = {
            population: [],
            geographyPaths: [],
            center: [102, 10],
            zoom: 2,

        }
        this.loadPaths = this.loadPaths.bind(this)
        this.handleZoomIn = this.handleZoomIn.bind(this)
        this.handleZoomOut = this.handleZoomOut.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    componentDidMount() {

        localStorage.removeItem("token");
        this.postAccessToken()
        setTimeout(() => {
            this.getSheetValues()
        }, 1000)
        this.loadPaths()
    }

    postAccessToken() {

        axios.post(`${urlpost}`,
            {
                headers: {
                    Authorization: "Bearer 4/rwEUwN26znXL2OhQFY7TlQKy7ceIVluDK-KfqgnHBYRaZ1okr2QilAn1eEYUBpKr-8tLaA7e6Pb18Yk74sFyiNo",
                    Content_Type: "application/x-www-form-urlencoded",
                    User_Agent: "google-oauth-playground",
                    Content_length: "322",
                    Host: "www.googleapis.com"
                }
            }).then(data => {
                localStorage.setItem("token", data.data.access_token);
            })
    }
    getSheetValues() {
        var token = localStorage.getItem("token");
        fetch(API,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then(response => response.json()).then(data => {
                let batchRowValues = data.values;
                console.log(batchRowValues);
                this.setState({population: batchRowValues  })
            })


    }

    loadPaths() {
        get("/static/mapjson/gadm36_THA_1.json")
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

        const { population } = this.state
        if (population.length === 0) {
            return SpinnerPage()
        }

        return (
            <div style={wrapperStyles}>
                <Motion
                    defaultStyle={{
                        zoom: 1,
                        x: 98.3307975,
                        y: 8.0252885,
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
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        >
                            <ZoomableGroup center={[x, y]} zoom={zoom}>
                                <Geographies geography={this.state.geographyPaths} disableOptimization>
                                    {(geographies, projection) =>
                                        geographies.map((geography, i) => {
                                            const statePopulation = population.find(s =>
                                                s[10] === geography.properties.NAME_1
                                            ) || {}
                                            return (
                                                <Geography
                                                    key={`state-${geography.properties.ID_1}`}
                                                    cacheId={`state-${geography.properties.ID_1}`}
                                                    round
                                                    data-html="true"
                                                    data-tip={statePopulation[16]}
                                                    geography={geography}
                                                    projection={projection}
                                                    style={{
                                                        default: {
                                                            fill: colorScale(+statePopulation[12]),
                                                            stroke: "#607D8B",
                                                            strokeWidth: 0.75,
                                                            outline: "none",
                                                        },
                                                        hover: {
                                                            fill: "#607D8B",
                                                            stroke: "#607D8B",
                                                            strokeWidth: 0.75,
                                                            outline: "none",
                                                        },
                                                        pressed: {
                                                            fill: "#FF5722",
                                                            stroke: "#607D8B",
                                                            strokeWidth: 0.75,
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
                                    subject={[100, 14]}
                                    strokeWidth={0}
                                >
                                    {/* <text className="font-TH">{"สัดส่วนนักศึกษา"}</text>
                                    <text y={18} className="font-TH">{"แยกตามรายจังหวัด"}</text> */}
                                </Annotation>
                            </ZoomableGroup>
                        </ComposableMap>
                    )}
                </Motion>
                <ReactTooltip />

            </div>
        )
    }
}

export default StudentMap