import React, { useState } from 'react';
import api from '../../services/api';

export default function Register({ history }) {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');

    const t = true;

    function handleSubmit(event) {
        event.preventDefault();

        const user = {
            firstname,
            lastname,
            email, 
            password
        };

        (password !== confirmpass)? 
            alert('senhas diferentes')
            : api.post('/user', user);
          
        history.push('/');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname"> Nome </label>         
                <input 
                    id="firstname"
                    type="text"
                    placeholder="Nome"
                    value={firstname}
                    required={t}
                    onChange={event => setFirstName(event.target.value)}
                />
            
                <label htmlFor="lastname"> Sobrenome </label>         
                <input 
                    id="lastname"
                    type="text"
                    placeholder="Sobrenome"
                    value={lastname}
                    required={t}
                    onChange={event => setLastName(event.target.value)}
                />

                <label htmlFor="birth"> Data de Nascimento </label>         
                <input 
                    id="birth"
                    type="date"
                    placeholder="Data de nascimento"
                    value={birth}
                    required={t}
                    onChange={event => setBirth(event.target.value)}
                />

                <label htmlFor="email"> Email </label>         
                <input 
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    required={t}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password"> Senha </label>         
                <input 
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    required={t}
                    onChange={event => setPass(event.target.value)} 
                />
                <label htmlFor="confirmapass">Senha* </label>         
                <input 
                    id="confirmpass"
                    type="password"
                    placeholder="Confirma senha"
                    value={confirmpass}
                    required={t}
                    onChange={event => setConfirmpass(event.target.value)} 
                />
                <button className="btn" type="submit">Register</button>
            </form>
        </>
    );
}