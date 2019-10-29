import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const user =  {email, password}
        const response = await api.post('/login', user);

        const { id, level } = response.data;

        localStorage.setItem('user', id);
        localStorage.setItem('level', level);

        history.push('/locais');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email"> EMAIL </label>         
            <input 
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="password"> SENHA </label>         
            <input 
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={event => setPassword(event.target.value)} 
            />
            <button className="btn" type="submit">Login</button>
            <p>Não é cadastrado? Registre-se</p>
            </form>
        </>
    );
}