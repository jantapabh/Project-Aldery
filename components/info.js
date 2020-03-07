import React, { useState, useEffect } from 'react';
import Sheetapi from '../config/api';
import moment from 'moment';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

moment.locale("th")
moment().format('LL');

const style = {
    width: '100%',
    height: '100%'
}

const Info = props => {

    const [data, setData] = useState([
        {
            title: "เพศชาย",
            number: 0,
            color: "primary"
        },
        {
            title: "เพศหญิง",
            number: 0,
            color: "primary"
        },
        {
            title: "รวม",
            number: 0,
            color: "primary"
        }
    ])
    const [color, setColor] = useState(["primary", "warning", "danger"])
    const [showingInfoWindow, setShowingInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState('')
    const [selectedPlace, setSelectedPlace] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
        await dataList(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B10:D10')
    }

    const dataList = async (token) => {
        try {
            var gender = await Sheetapi.getSheet(token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B9:D9')
            var number = await Sheetapi.getSheet(token, 'ข้อมูลการวิเคราะห์ทางสถิติ!B10:D10')
            for (let i = 0; i <= 2; i++) {
                var value = await {
                    title: gender[0][i],
                    number: parseInt(number[0][i]),
                    color: color[i]
                }
                var newData = [...newData, value]
            }
            newData.shift()
            setData(newData)

        } catch (err) {
            console.log(err);
        }
    }

    const onMarkerClick = (props, marker, e) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowingInfoWindow(true)
    }

    const onMapClicked = (props) => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false)
            setActiveMarker(null)
        }
    };

    return (
        <div className="warp-info">
            <div className="page-content">
                <div className="container-data">
                    <div className="title-data">
                        <h6>จำนวนผู้สูงอายุ</h6>
                    </div>
                    <div className="content-data">
                        <div className="main-data">
                            {
                                data ? data.map((item, index) => (
                                    <React.Fragment>
                                        <div className="card-data" key={index}>
                                            <div className="title">
                                                <h5>{item.title}</h5>

                                                <p>{item.number} คน</p>
                                            </div>
                                            <div className="progress">
                                                <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                    role="progressbar"
                                                    style={{ width: item.number }}
                                                    aria-valuenow={item.number}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>

                                    </React.Fragment>
                                ))
                                    :
                                    <div className="card-data">
                                        <div className="title">
                                            <h5>{item.title}</h5>

                                            <p>{item.number} คน</p>
                                        </div>
                                        <div className="progress">
                                            <div className={`progress-bar bg-${item.color} progress-bar-striped progress-bar-animated`}
                                                role="progressbar"
                                                style={{ width: item.number }}
                                                aria-valuenow={item.number}
                                                aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>

                        <div className="other-data">
                            <div className="title-other-data">
                                <img src="/static/logomain.svg" alt="icon" />
                                <h5>ข้อมูลผู้สูงอายุ</h5>
                            </div>

                            <p>วันที่ {moment().add(543, 'year').format('LL')}</p>
                            <h6>ที่มา: แบบสำรวจข้อมูลพื้นฐานผู้สูงอายุ </h6>
                            <h6>เทศบาลเมืองกะทู้ จังหวัดภูเก็ต</h6>
                        </div>
                    </div>
                </div>

                <div className="content-map">
                {/* <img src="/static/testcover3.jpg"/>

                     <Map
                        google={props.google}
                        style={style}
                        initialCenter={{
                            lat: 7.909002,
                            lng: 98.3333471
                        }}
                        zoom={18.12}
                        onClick={onMapClicked}
                    >
                        <Marker position={{
                            lat: 7.9089980,
                            lng: 98.3334378
                        }}
                            name={'เทศบาลเมืองกะทู้ จังหวัดภูเก็ต'}
                            onClick={onMarkerClick}
                        />

                        <InfoWindow
                            marker={activeMarker}
                            visible={showingInfoWindow}>
                            <div>
                                <h6>{selectedPlace.name}</h6>
                            </div>
                        </InfoWindow>
                    </Map>  */}
                </div>
            </div>
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBSfx44Vbst39S5gSLKqbo4kbqpgDo0rdE")
})(Info);