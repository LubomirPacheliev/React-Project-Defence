import React from 'react';
import { editBook } from '../../../Services/bookService';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.scss';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const onSubmit = async e => { // TODO: Notification Component
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            description: e.target.description.value,
            image: e.target.image.value,
            author: e.target.author.value,
            price: e.target.price.value
        };

        await editBook(data, id);
        navigate('/collections/');
    }

    return (
        <section className="edit">
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' id='title' placeholder='Sherlock' />

                <label htmlFor="description">Description</label>
                <textarea type="field" name='description' id='description' />

                <label htmlFor="image">Image</label>
                <input type="text" name='image' id='image' placeholder='some image link' />

                <label htmlFor="author">Author</label>
                <input type="text" name='author' id='author' placeholder='James Moriarty' />

                <label htmlFor="price">Price</label>
                <input type="number" name='price' id='price' placeholder='25' />

                <input type="submit" value="Edit" />
            </form>
        </section>
    );
}

export default Edit;