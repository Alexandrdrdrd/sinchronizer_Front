import React from 'react';
import ColumnItem from "./ColumnItem";


const TableItem = (props) => {

console.log(props.table.columnList)

    const tableName = props.table.table;

    // const columns =


    return (
        <li>
            {tableName}
            <ul>{props.table.columnList.map(column => <ColumnItem column={column}/>)}</ul>
        </li>
    )


}

export default TableItem;