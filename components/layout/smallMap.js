import React, { useState, useEffect } from 'react'
import Map from './Map'
import BarMap from '../chart/barMap'

const SmallMap = props => {



    return (

        <div className="warp-small-map">
            <Map onToken={props.onToken} />
            <BarMap />
        </div>


    )
}
export default SmallMap;