import React from 'react';
import './Register.scss';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../Services/authService';

const Register = () => { // TODO: Field requirements for password
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const repassword = e.target.repassword.value;
        const res = await registerUser(username, email, password, repassword); // TODO: Notification Component
        if (res.ok) navigate('/');
        return res;
    }

    return (
        <section className="register-page">
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' placeholder='eveline57' />

                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' placeholder='eveline@gmail.com' />

                <label htmlFor="password">Password</label>
                <input type="text" name='password' id='password' placeholder='******' />

                <label htmlFor="repassword">Confirm Password</label>
                <input type="text" name='repassword' id='repassword' placeholder='******' />

                <input type="submit" value="Register" />
                <div class="card-already-have-account">
                    <Link to='/login'>Already have an account?</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;