import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function Places() {
    const [places, setPlaces] = useState([]);
    
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

    return (
        <>
            <div className="menu"></div>
            <ul className="place-list">
                {places.map(place => (
                   <li key={place._id}>
                       <strong>{place.name}</strong>
                       <span>Description: {place.description}</span>
                       <span>Latitude: {place.latitude}</span>
                       <span>Longitude: {place.longitude}</span>
                       <span>Link: {place.link}</span>
                       <span>Points: {place.points}</span>
                       <button onClick={(event) => deletePlace(place._id)} className="btn-remove"> Remove place </button>
                   </li> 
                ))}
            </ul>
        </>
    );
}
