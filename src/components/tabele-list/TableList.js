import React from 'react';
import TableItem from "../table-item/TableItem";


import './table-list.css'

const TableList = (props) => {


    const tables = () => props.data.map(table => {
        return (
            <TableItem table={table} setState={props.setState}/>)

    })

    return (
        <ul className="app-list list-group">
            {tables()}
        </ul>
    )

}

export default TableList;