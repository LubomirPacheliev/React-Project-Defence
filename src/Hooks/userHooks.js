import { validateJWT } from '../Services/authService';

const useAuthenticator = async (setCookiePresence) => { // ! Supposed to be used with useEffect
    const controller = new AbortController();
    const signal = controller.signal;

    try {
        const res = await validateJWT(signal);
        if (!res) setCookiePresence(false);
        setCookiePresence(res.validated);
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
    useAuthenticator
}