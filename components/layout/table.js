import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

let order = 'desc';

class Table extends React.Component {

    static defaultProps = {
        data: []
    }

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleClick = (rowKey) => {
        alert(this.refs.table.getPageByRowKey(rowKey));
    }

    handleBtnClick = () => {
        if (order === 'desc') {
            this.refs.table.handleSort('asc', 'name');
            order = 'asc';
        } else {
            this.refs.table.handleSort('desc', 'name');
            order = 'desc';
        }
    }


    render() {
        const { data } = this.props
        return (
            <div className="warp-table">
                <div className="table-main">
                    <BootstrapTable
                        ref='table'
                        data={data}
                        
                        pagination={true}
                        search={true}
                        searchPlaceholder={"ค้นหา"}
                    >
                        <TableHeaderColumn dataField="ลำดับที่"  isKey={true}>ลำดับที่</TableHeaderColumn>
                        <TableHeaderColumn dataField="คำนำหน้า" >คำนำหน้าชื่อ</TableHeaderColumn>
                        <TableHeaderColumn dataField="ชื่อ">ชื่อ</TableHeaderColumn>
                        <TableHeaderColumn dataField="นามสกุล">นามสกุล</TableHeaderColumn>
                    </BootstrapTable>



                </div>


            </div>
        )
    }
}
export default Table;