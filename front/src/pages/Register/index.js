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
            alert('pass diferentes')
            : api.post('/user', user);
          
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname"> FirstName* </label>         
                <input 
                    id="firstname"
                    type="text"
                    placeholder="Name"
                    value={firstname}
                    required={t}
                    onChange={event => setFirstName(event.target.value)}
                />
            
                <label htmlFor="lastname"> LastName* </label>         
                <input 
                    id="lastname"
                    type="text"
                    placeholder="LastName"
                    value={lastname}
                    required={t}
                    onChange={event => setLastName(event.target.value)}
                />

                <label htmlFor="birth"> Birth* </label>         
                <input 
                    id="birth"
                    type="date"
                    placeholder="Birth"
                    value={birth}
                    required={t}
                    onChange={event => setBirth(event.target.value)}
                />

                <label htmlFor="email"> Email* </label>         
                <input 
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    required={t}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password"> Password* </label>         
                <input 
                    id="password"
                    type="password"
                    placeholder="Pass"
                    value={password}
                    required={t}
                    onChange={event => setPass(event.target.value)} 
                />
                <label htmlFor="confirmapass">Confirm Password* </label>         
                <input 
                    id="confirmpass"
                    type="password"
                    placeholder="Confirm Pass"
                    value={confirmpass}
                    required={t}
                    onChange={event => setConfirmpass(event.target.value)} 
                />
                <button className="btn" type="submit">Register</button>
            </form>
        </>
    );
}