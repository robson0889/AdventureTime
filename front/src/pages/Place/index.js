import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function Places({ history }) {
    const [places, setPlaces] = useState([]);
    const adm = (localStorage.getItem('level') === 'usuário'? false : true);

    useEffect(() => {
        async function loadPlaces() {
            const response = await api.get('/place');
            setPlaces(response.data);
        }
        loadPlaces();
    }, []);

    async function deletePlace(id){
        await api.delete(`/place/${id}`);
        window.location.reload(true);
    }

    function newPlace() {
        history.push('/novolocal');
    }

    return (
        <>
            <div className="menu"></div>
            <ul className="place-list">
                {adm? <button onClick={() => newPlace()} className="btn-new"> Novo Local </button> 
                    : ''}
                {places.map(place => (
                   <li key={place._id}>
                       <strong>{place.name}</strong>
                       <span>Descrição: {place.description}</span>
                       <span>Latitude: {place.latitude}</span>
                       <span>Longitude: {place.longitude}</span>
                       <span>Link: {place.link}</span>
                       <span>Pontos: {place.points}</span>
                       {adm? <button onClick={() => deletePlace(place._id)} className="btn-remove"> Remover</button>
                        : ''}
                   </li> 
                ))}
            </ul>
        </>
    );
}
