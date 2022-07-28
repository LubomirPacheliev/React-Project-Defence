import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBook as getBookByID } from '../../../Hooks/bookHooks';
import './Details.scss';

const Details = () => {
    const [book, setBook] = useState();
    const { id } = useParams();

    const getBook = async id => {
        await getBookByID(id, setBook);
    }

    useEffect(() => {
        getBook(id)
    }, []);

    return (<>
        {!book || <section className="details">
            <img src={book.image} />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <h3>{book.author}</h3>
            <h3>{book.price}</h3>
        </section>}
    </>);
}

export default Details;