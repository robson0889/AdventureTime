import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(await api.post('/login', {email, pass}));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email"> Email* </label>         
            <input 
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="pass"> Password* </label>         
            <input 
                id="pass"
                type="password"
                placeholder="Pass"
                value={pass}
                onChange={event => setPass(event.target.value)} 
            />
            <button className="btn" type="submit">Login</button>
            <p>Don't remember your pass? Recover</p>
            <p>No registration? Register here</p>
            </form>
        </>
    );
}