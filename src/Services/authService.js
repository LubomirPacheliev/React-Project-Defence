import fetch from 'isomorphic-fetch';

const registerUser = async (username, email, password, repassword) => {
    try {
        const res = await fetch('/api/register', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                repassword: repassword
            }),
            headers: {
                'Content-Type': 'application/X-www-form-urlencoded'
            }
        });
        if (!res.ok) throw new Error('User registration failed.');
        return res;
    } catch (e) {
        console.error(e);
    }
}

export {
    registerUser
};