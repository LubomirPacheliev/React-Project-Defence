import fetch from 'isomorphic-fetch';
import { API_URL as apiURL } from '../constants';

const createBook = async data => { // TODO: Could make a fetch get/post function
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

const editBook = async (data, id) => {
    try {
        const res = await fetch(`${apiURL}/api/edit/${id}`, {
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

const getBookByID = async (id, signal) => {
    try {
        const res = await fetch(`${apiURL}/api/books/${id}`, {
            signal: signal,
            mode: "cors",
            credentials: "include"
        });
        if (!res.ok) throw new Error('Get operation failed.');
        const book = await res.json(res.body);
        return book;
    } catch (e) {
        console.error(e);
        return e;
    }
}

export {
    createBook,
    editBook,
    getAllBooks,
    getBookByID
};