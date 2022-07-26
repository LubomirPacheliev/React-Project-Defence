import React, { useEffect, useState } from 'react';
import Book from './Book/Book';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../../Services/bookService';
import "./Collection.scss";

const Collection = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const books = await getAllBooks();
        setBooks(books);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <section className="collection">
            <h1>Our Collection</h1>
            <h1>(15 Titles)</h1>
            <Link className='create' to="/collections/create">Add Book</Link>
            <section className="books">
                {books.map((book, id) =>
                    < Book img={book.image} title={book.title} id={id} />
                )}
            </section>
        </section>
    );
}

export default Collection;