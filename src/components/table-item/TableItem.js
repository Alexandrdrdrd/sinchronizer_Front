import React from 'react';
import ColumnItem from "../columt-item/ColumnItem";

import './table-item.css'

const TableItem = (props) => {


    return (
        <li>
            {props.table.table}
            <ul><ColumnItem columns={props.table.columnList} setState={props.setState} tableName={props.table.table}/>
            </ul>
        </li>
    )


}

export default TableItem;