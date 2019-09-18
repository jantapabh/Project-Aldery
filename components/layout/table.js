import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [{id:1,name:"A",price:"100"}]

class Table extends React.Component {

    render() {
        return (
            <div>
                <BootstrapTable data={products}>
                    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>

            </div>
        )
    }
}
export default Table;