import React from 'react'
import Table from '../components/layout/table'
import Nav from '../components/nav'


class Total extends React.Component {
    render() {
        return (
            <div className="warp-main">
                <Nav name="total"/>
                <div className="content-main">
                    <Table />
                </div>

            </div>
        )
    }
}
export default Total