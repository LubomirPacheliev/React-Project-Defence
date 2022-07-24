import React from 'react';
import Book from './Book/Book';
import { Link } from 'react-router-dom';
import "./Collection.scss";

const Collection = () => {
    return (
        <section className="collection">
            <h1>Our Collection</h1>
            <h1>(15 Titles)</h1>
            <Link className='create' to="/collections/create">Add Book</Link>
            <section className="books">
                <Book img="https://images4.penguinrandomhouse.com/cover/9780241468654" title="Around the World in Eighty Days" />
                <Book img="https://images1.penguinrandomhouse.com/cover/9780241347782" title="The Adventures of Sherlock Holmes" />
                <Book img="https://images1.penguinrandomhouse.com/cover/9780241382707" title="The War of the Worlds" />
                <Book img="https://images3.penguinrandomhouse.com/cover/9780241347683" title="Crime and Punishment" />
                <Book img="https://images2.penguinrandomhouse.com/cover/9780241198773" title="Twenty Thousand Leagues Under the Sea" />

                <Book img="https://images4.penguinrandomhouse.com/cover/9780241468654" title="Around the World in Eighty Days" />
                <Book img="https://images1.penguinrandomhouse.com/cover/9780241347782" title="The Adventures of Sherlock Holmes" />
                <Book img="https://images1.penguinrandomhouse.com/cover/9780241382707" title="The War of the Worlds" />
                <Book img="https://images3.penguinrandomhouse.com/cover/9780241347683" title="Crime and Punishment" />
                <Book img="https://images2.penguinrandomhouse.com/cover/9780241198773" title="Twenty Thousand Leagues Under the Sea" />

                <Book img="https://images4.penguinrandomhouse.com/cover/9780241468654" title="Around the World in Eighty Days" />
                <Book img="https://images1.penguinrandomhouse.com/cover/9780241347782" title="The Adventures of Sherlock Holmes" />
                <Book img="https://images1.penguinrandomhouse.com/cover/9780241382707" title="The War of the Worlds" />
                <Book img="https://images3.penguinrandomhouse.com/cover/9780241347683" title="Crime and Punishment" />
                <Book img="https://images2.penguinrandomhouse.com/cover/9780241198773" title="Twenty Thousand Leagues Under the Sea" />
            </section>
        </section>
    );
}

export default Collection;