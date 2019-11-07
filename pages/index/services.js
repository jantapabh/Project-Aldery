import React, { useState } from 'react'
import Nav_index from '../../components/nav_index'


const Services = () => {

    return (
        <div>
            <Nav_index />
            <div class="container">
                <ul class="progressbar">
                    <li class="active">login</li>
                    <li>choose interest</li>
                    <li>add friends</li>
                    <li>View map</li>
                </ul>
            </div>
        </div>
    )

}
export default Services;