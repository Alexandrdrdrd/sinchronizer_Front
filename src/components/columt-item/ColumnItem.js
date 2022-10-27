import React from "react";

import './column-item.css';

const ColumnItem = (props) => {


    const listOfColumns = Object.entries(props.columns)


    const onChangeColumnValue = (columnName) => {

        props.setState(({data}) => ({

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

    const columns = () => listOfColumns.map(column =>
        <form className="checkboxes__item">
            <label className="checkbox style-g"> {column[0]} <input type="checkbox"
                                                                    checked={column[1]}
                                                                    onChange={() => onChangeColumnValue(column[0])}/>
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