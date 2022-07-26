import React from 'react';
import "./Book.scss";

const Book = ({ img, title }) => {
    return (
        <article className="book">
            <img src={img} />
            <h2>{title}</h2>
        </article>
    );
}

export default Book;