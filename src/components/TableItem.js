import React from 'react';
import ColumnItem from "./ColumnItem";


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