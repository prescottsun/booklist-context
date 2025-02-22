import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { books } = useContext(BookContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			className="book-list"
			style={{ color: theme.syntax, background: theme.bg }}
		>
			<ul>
				{books.map((book) => {
					return (
						<li key={book.id} style={{ background: theme.ui }}>
							{book.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BookList;

// export class BookList extends Component {
// 	static contextType = ThemeContext;
// 	render() {
// 		const { isLightTheme, light, dark } = this.context;
// 		const theme = isLightTheme ? light : dark;
// 		return (
// 			<div
// 				className="book-list"
// 				style={{ color: theme.syntax, background: theme.bg }}
// 			>
// 				<ul>
// 					<li style={{ background: theme.ui }}>The Way of Kings</li>
// 					<li style={{ background: theme.ui }}>The Name of the Wind</li>
// 					<li style={{ background: theme.ui }}>The Final Empire</li>
// 				</ul>
// 			</div>
// 		);
// 	}
// }
// export default BookList;
