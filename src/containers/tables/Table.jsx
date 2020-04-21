import React from "react";
import PropTypes from "prop-types";

// Styles
import clsx from "clsx";
import "./Table.css";

/**
 * Table
 * -----
 * A simple table that can display a lot of data.
 * Example of:
 * const columns = ["fruit", "colour"]
 * const data = [{fruit: "Apple", colour: "Green"}, {fruit: "Cherry", colour: "red"}]
 * 
 * @param columns {Array} - columns of the table
 * @param data {Array} - data of the table, with the columns as key
 */
const Table = ({columns, data}) => {
    return (
        <table className={clsx("styled-table-data", "small-table")}>
            <tr className={"styled-table-head"}>
                {columns.map((column, index) => {
                    return <th key={`column-${index}`}>{column}</th>
                })}
            </tr>
            {data.map((row, index) => (
                <tr key={`row-${index}`}>
                    {columns.map((column, index) => {
                        return <td key={`row-column-${index}`}>{row[column]}</td>
                    })}
                </tr>
            ))}
        </table>
    )
}

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
}

export default Table;