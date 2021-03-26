import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
	{
		id: 1,
		img:
			'https://images-eu.ssl-images-amazon.com/images/I/51T2TGvkilL._AC_UL200_SR200,200_.jpg',
		title: 'Boca de sobrau! U lalau',
		author: 'Mirial',
	},
	{
		id: 2,
		img:
			'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
		title: 'Weed, the power, the love',
		author: 'Mirial e Caique',
	},
	{
		id: 3,
		img:
			'https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL200_SR200,200_.jpg',
		title: 'Horses and love',
		author: 'Good',
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				
				//const { img, title, author } = book;
				return <Book key={book.id} {...book}></Book>; //spreading proprties on the porps operator
			})}
		</section>
	);
}

const Book = (props) => {
	const { img, title, author } = props; //destructuring
	return (
		<article className="book">			
			<img src={img} alt="Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
