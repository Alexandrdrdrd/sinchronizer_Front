import React from 'react';
import ColumnItem from "../columt-item/ColumnItem";

import './table-item.css'

const TableItem = (props) => {


    return (
        <li className="app-list list-group">
            {props.table.table}
            <ul className="app-list list-group"><ColumnItem columns={props.table.columnList} setState={props.setState} tableName={props.table.table}/>
            </ul>
        </li>
    )


}

export default TableItem;