import fetch from 'isomorphic-fetch';
import { apiURL } from './apiURL';

const createBook = async data => {
    try {
        const res = await fetch(`${apiURL}/api/create`, {
            mode: "cors",
            credentials: "include",
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) throw new Error('Create operation failed.');
        return res;
    } catch (e) {
        console.error(e);
        return e;
    }
}

const getAllBooks = async () => {
    try {
        const res = await fetch(`${apiURL}/api/books`, {
            mode: "cors",
            credentials: "include"
        });
        if (!res.ok) throw new Error('Get operation failed.');
        const books = await res.json(res.body);
        return books;
    } catch (e) {
        console.error(e);
        return e;
    }
}

export {
    createBook,
    getAllBooks
};