import { getBookByID } from '../Services/bookService';

const useGetBook = async (id, setData) => { // ! Supposed to be used with useEffect
    const controller = new AbortController();
    const signal = controller.signal;

    try {
        const book = (await getBookByID(id, signal))[0];
        if (!book) throw new Error('Get failed.');
        setData(book);
    } catch (e) {
        if (e.name === 'AbortError') {
            console.log('successfully aborted');
        } else {
            console.error(e);
        }
    }

    return () => controller.abort();
}

export {
    useGetBook
}