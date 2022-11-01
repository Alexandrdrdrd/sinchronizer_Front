import React from "react";

import './column-item.css';

const ColumnItem = (props) => {


    const listOfColumns = Object.entries(props.columns)

    const changeColumnValue = (columnName) => {
        props.setState(({data,columnsSelected}) => ({
            columnsSelected:columnsSelected+1,

            data: data.map(item => {
                if (item.table === props.tableName) {
                    return {
                        ...item,
                        columnList: {
                            ...item.columnList,
                            [columnName]: !item.columnList[columnName]
                        },

                    }
                }
                return item;
            })
        }))
    }

    const changeColumnCounter = (columnValue) => {
        if(columnValue){
            props.setState({columnsSelected:props.columnsSelected -1})
        }
        else props.setState({columnsSelected:props.columnsSelected +1})
    }


    const onChangeColumn = (columnName, columnValue) => {
        changeColumnValue(columnName)
        changeColumnCounter(columnValue)
    }

    const columns = () => listOfColumns.map(column =>
        <form className="checkboxes__item">
            <label className="checkbox style-g"> {column[0]} <input type="checkbox"
                                                                    checked={column[1]}
                                                                    onChange={() => onChangeColumn(column[0],
                                                                        column[1])}/>
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body"></div>

            </label>
        </form>)


    return (
        <>
            <li>{columns()}</li>
        </>
    )


}

export default ColumnItem;