import React, { useEffect, useState } from 'react';
import Book from './Book/Book';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../../Services/bookService';
import { useAuthenticator as getCookie } from '../../Hooks/userHooks';
import { ADMIN_ID as ADMIN } from '../../constants';
import "./Collection.scss";

const Collection = () => {
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState();

    const getBooks = async () => {
        const books = await getAllBooks();
        setBooks(books);
    }

    const getUser = async () => {
        await getCookie(setUser);
    }

    useEffect(() => {
        getBooks();
        getUser();
    }, [setBooks, setUser]);

    return ( // TODO: Image loads full size and becomes small
        <section className="collection">
            <h1>Our Collection</h1>
            <h1>(15 Titles)</h1>
            {user && ((user._id === ADMIN) && <Link className='create' to="/collections/create">Add Book</Link>)}
            <section className="books">
                {books.map((book, id) =>
                    <Book img={book.image} title={book.title} key={id} _id={book._id} />
                )}
            </section>
        </section>
    );
}

export default Collection;