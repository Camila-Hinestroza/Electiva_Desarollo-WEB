// Favoritos.js
import React from 'react';
import { useFavoritos } from './components/FavoritosContexto';
import './../../styles/Galeria.css'; 

const Favoritos = () => {
    const { favoritos } = useFavoritos();

    if (favoritos.length === 0) return <p>No hay favoritos aún.</p>;

    return (
        <div>
            <h1>Mis Favoritos</h1>
            <div className="favoritos-grid">
                {favoritos.map((image) => (
                    <div key={image.id} className="imagen">
                        <img src={image.download_url} alt={`Imagen por ${image.author}`} />
                        <p>Fotógrafo: {image.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favoritos;
