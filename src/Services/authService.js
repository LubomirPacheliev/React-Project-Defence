import fetch from 'isomorphic-fetch';
const apiURL = `http://localhost:4000`;

const registerUser = async (username, email, password, repassword) => {
    try {
        const res = await fetch(`${apiURL}/api/register`, {
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

const loginUser = async (email, password) => {
    try {
        const res = await fetch(`${apiURL}/api/login`, {
            method: 'post',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/X-www-form-urlencoded'
            }
        });
        if (!res.ok) throw new Error('User authentication failed.');
        return res;
    } catch (e) {
        console.error(e);
    }
}

export {
    registerUser,
    loginUser
};