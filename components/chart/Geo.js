import React from 'react'
import {GeoChart ,Timeline } from 'react-chartkick'
import 'chart.js'



class Geo extends React.Component {
    render() {
        return (
            <div className="warp-chart">

 <GeoChart data={[["United States", 44], ["Germany", 23], ["Brazil", 22]]} />
<Timeline data={[["Washington", "1789-04-29", "1797-03-03"], ["Adams", "1797-03-03", "1801-03-03"]]} />
            </div>
        )
    }
}

export default Geo;