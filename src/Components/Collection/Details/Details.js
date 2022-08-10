import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBook as getBookByID } from '../../../Hooks/bookHooks';
import { useAuthenticator as getUser } from '../../../Hooks/userHooks';
import './Details.scss';

const Details = () => {
    const [book, setBook] = useState();
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const handleEditClick = e => {
        navigate('/collections/edit/' + id);
    }

    const getBook = async id => {
        await getBookByID(id, setBook);
    }

    useEffect(() => {
        getBook(id)
        getUser(setUser);
    }, []);

    return (<>
        {!book || <section className="details">
            <img src={book.image} />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <h3>{book.author}</h3>
            <h3>{book.price}</h3>
            {(user._id === book.owner) && <article className='owner-article'>
                <button onClick={handleEditClick}>edit</button>
                <button>delete</button>
            </article>}
        </section>}
    </>);
}

export default Details;