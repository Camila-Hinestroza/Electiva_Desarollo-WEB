import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/GaleriaContexto.css';

const GaleriaContext = () => {
    return (
        <div className="galeria-context">
            <h1>Galería de Imágenes</h1>
            <p>
                Bienvenido al a galeria de imagenes, aquí podrás explorar una variedad de imágenes aleatorias. Cada imagen tiene su propia historia, y estamos seguros de que disfrutarás viendo
                la belleza que hemos recopilado y conocer su autor, su fotografo. ¡Haz clic en el botón para ver la galería!
            </p>
            <Link to="/Galeria">
                <button className="galeria-button">Ver Galería</button>
            </Link>
        </div>
    );
};

export default GaleriaContext;
