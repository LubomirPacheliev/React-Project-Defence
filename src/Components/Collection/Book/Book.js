import React from 'react';
import { Link } from 'react-router-dom';
import "./Book.scss";

const Book = ({ img, title, _id }) => {
    return (
        <article className="book">
            <img src={img} />
            <Link to={'/collections/' + _id}>{title}</Link>
        </article>
    );
}

export default Book;