import React from "react";
import classNames from "clsx";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
import Star from "@material-ui/icons/Star";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import readingList from "../../../data/ReadingList";

/**
 * #ReadingList
 * Functional component, used to display a list of books read or in reading process during the year_
 */
const ReadingList = () => {
	const [yearSelected, setYear] = React.useState(new Date().getFullYear());
    const books = readingList[yearSelected];
    return <div className={classNames("c-reading-list", "o-fc-aic", "u-m-b-m")}>
		<h3>My reading list of {yearSelected}</h3>
        <table className={classNames("c-table-info", "c-small-table")}>
			<tr className={"c-table-head"}>
				<th>Name</th>
				<th>Author</th>
                <th>Status</th>
                <th>Rating</th>
			</tr>
			{books && books.reverse().map(book => (
				<tr key={book.name}>
					<td>{book.name}</td>
					<td>{book.author}</td>
					<td>{book.percentage === 100 ? <CheckOutlined/> : `${Math.round(book.percentage * 10) / 10}%`}</td>
					<td>{book.percentage === 100 ? book.rate : ""}</td>
				</tr>
			))}
        </table>
		<div className={classNames("o-fr-jsb")}>
			{yearSelected > 2019 && <NavigateBefore onClick={() => setYear(yearSelected - 1)}/>}
			<span>{yearSelected}</span>
			{yearSelected < 2020 && <NavigateNext onClick={() => setYear(yearSelected + 1)}/>}
		</div>
	</div>
};

export default ReadingList;
