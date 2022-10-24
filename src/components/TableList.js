import React from 'react';
import TableItem from "./TableItem";


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