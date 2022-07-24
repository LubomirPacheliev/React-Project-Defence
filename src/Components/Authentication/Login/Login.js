import React from 'react';
import './Login.scss';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../Services/authService';

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await loginUser(email, password); // TODO: Notification Component
        if (res.ok) navigate('/');
        window.location.reload();
        return res;
    }

    return (
        <section className="login-page">
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' placeholder='eveline@gmail.com' />

                <label htmlFor="password">Password</label>
                <input type="text" name='password' id='password' placeholder='******' />

                <input type="submit" value="Login" />
                <div class="card-already-have-account">
                    <Link to='/register'>Don't have an account?</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;