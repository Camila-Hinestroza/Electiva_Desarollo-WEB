import React from 'react';
import ImagenDetalles from './ImagenDetalles';

const ImagenIndividual = ({ image }) => {
    return (
        <div className="imagen">
            <img src={image.download_url} alt="Imagen aleatoria" />
            <ImagenDetalles photographer={image.author} />
        </div>
    );
};

export default ImagenIndividual;
