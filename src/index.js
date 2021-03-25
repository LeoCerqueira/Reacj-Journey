import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
	return (
		<section className="booklist">
			<Book />
		</section>
	);
}

const author = "Mirial"

const Book = () => {
	
	const title = 'Boca de sobrau! U lalau'
	return (
		<article className="book">
			<img
				src="https://images-eu.ssl-images-amazon.com/images/I/51T2TGvkilL._AC_UL200_SR200,200_.jpg"
				alt="Book"
			/>
			<h1>{title}</h1>

			<h4>{author.toUpperCase()}</h4>
			
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
