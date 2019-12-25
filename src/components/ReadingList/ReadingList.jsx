import React, { Component } from "react";
import classNames from "clsx";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
import Star from "@material-ui/icons/Star";

/**
 * #ReadingList
 * _React component, used to display a list of books read or in reading process during the year_
 */
class ReadingList extends Component {
  render() {
    const books = [
      {name: "The tree body Problem", author: "Liu Cixin", percentage: 100, rate: 5},
      {name: "The Dark Forest", author: "Liu Cixin", percentage: 100, rate: 5},
      {name: "Death's end", author: "Liu Cixin", percentage: 100, rate: 4},
      {name: "Heart of Darkness", author: "Joseph Conrad", percentage: 100, rate: 4},
      {name: "La Promesse de l'Aube", author: "Romain Gary", percentage: 100, rate: 5},
      {name: "Denier du Reve", author: "Marguerite Yourcenar", percentage: 100, rate: 3},
      {name: "The Old Man and the Sea", author: "Ernest Hemingway", percentage: 100, rate: 5},
      {name: "Dune", author: "Frank Herbet", percentage: 122/324 * 100, rate: 0},
      {name: "Kim", author: "Rudyard Kipling", percentage: 14/588 * 100, rate: 0},
    ]
    return (
      <div className={classNames("c-reading-list", "o-fc-aic", "u-m-b-m")}>
        <h3>
          My reading list of 2019
        </h3>
        <table className={classNames("c-table-info", "c-small-table")}>
			<tr className={"c-table-head"}>
				<th>Name</th>
				<th>Author</th>
                <th>Status</th>
                <th>Rating</th>
			</tr>
			{books.reverse().map(book => (
				<tr key={book.name}>
					<td>{book.name}</td>
					<td>{book.author}</td>
          <td>{book.percentage === 100 ? <CheckOutlined/> : `${Math.round(book.percentage * 10) / 10}%`}</td>
          <td>{book.percentage === 100 ? book.rate : ""}</td>
				</tr>
			))}
        </table>
      </div>
    );
  }
}

export default ReadingList;
