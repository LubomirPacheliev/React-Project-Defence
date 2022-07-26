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
    }
}

export {
    createBook
};