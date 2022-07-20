import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

// TODO: Notification Component
// TODO: Field requirements for password
const Register = () => {
    return (
        <section className="register-page">
            <form action="/register" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' placeholder='eveline57' />

                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' placeholder='eveline@gmail.com' />

                <label htmlFor="password">Password</label>
                <input type="text" name='password' id='password' placeholder='******' />

                <label htmlFor="re-password">Confirm Password</label>
                <input type="text" name='re-password' id='re-password' placeholder='******' />

                <input type="submit" value="Register" />
                <div class="card-already-have-account">
                    <Link to='/login'>Already have an account?</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;