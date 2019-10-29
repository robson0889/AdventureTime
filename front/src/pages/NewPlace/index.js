import React, { useState } from 'react';
import api from '../../services/api';

export default function Places({ history }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [link, setLink] = useState('');
    const [points, setPoint] = useState(0);
    
    const t = true;

    async function handleSubmit(event) {
        event.preventDefault();

        const place = {
            name, 
            description, 
            latitude,
            longitude, 
            link,
            points
        };
        
        await api.post('/place', place);
          
        history.push('/locais');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Nome </label>         
                <input 
                    id="name"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    required={t}
                    onChange={event => setName(event.target.value)}
                />

                <label htmlFor="description"> Descrição </label>
                <input
                    id="description"
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    required={t}
                    onChange={event => setDescription(event.target.value)}
                />

                <label htmlFor="latitude"> Latitude </label>
                <input
                    id="latitude"
                    type="text"
                    placeholder="Latitude"
                    value={latitude}
                    required={t}
                    onChange={event => setLatitude(event.target.value)}
                />
                
                <label htmlFor="longitude"> Longitude </label>
                <input
                    id="longitude"
                    type="text"
                    placeholder="Longitude"
                    value={longitude}
                    required={t}
                    onChange={event => setLongitude(event.target.value)}
                />

                <label htmlFor="link"> Link </label>
                <input
                    id="link"
                    type="text"
                    placeholder="Link"
                    value={link}
                    onChange={event => setLink(event.target.value)}
                />

                <label htmlFor="points"> Pontuação </label>
                <input
                    id="point"
                    type="number"
                    placeholder="Pontuação"
                    value={points}
                    required={t}
                    onChange={event => setPoint(event.target.value)}
                />

                <button className="btn" type="submit">Adicionar</button>
            </form>
        </>
    );
}
