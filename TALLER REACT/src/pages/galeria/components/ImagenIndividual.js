// ImagenIndividual.js
import React from 'react';
import { useFavoritos } from '../../favoritos/components/FavoritosContexto';

const ImagenIndividual = ({ image }) => {
    const { favoritos, toggleFavorito } = useFavoritos();
    const esFavorito = favoritos.some(fav => fav.id === image.id);

    return (
        <div className="imagen">
            <img src={image.download_url} alt={`Imagen por ${image.author}`} />
            <div>
                <p>Fotógrafo: {image.author}</p>
                <button className="galeria-button" onClick={() => toggleFavorito(image)}>
                    {esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
                </button>
            </div>
        </div>
    );
};

export default ImagenIndividual;
