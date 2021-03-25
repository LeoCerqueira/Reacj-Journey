import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />

		</section>
	);
}

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	);
};
const Image = () => (
	<img
		src="https://images-eu.ssl-images-amazon.com/images/I/51T2TGvkilL._AC_UL200_SR200,200_.jpg"
		alt="Book"
	/>
);

const Title = () => <h1>And Away</h1>;
const Author = () => <h4>Bob Mortimer</h4>;

ReactDOM.render(<BookList />, document.getElementById('root'));
