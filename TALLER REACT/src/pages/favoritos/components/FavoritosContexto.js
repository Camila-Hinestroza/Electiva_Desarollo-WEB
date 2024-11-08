// FavoritosContexto.js
import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);

    const toggleFavorito = (image) => {
        setFavoritos((prevFavoritos) => {
            if (prevFavoritos.some(fav => fav.id === image.id)) {
                return prevFavoritos.filter(fav => fav.id !== image.id);
            } else {
                return [...prevFavoritos, image];
            }
        });
    };

    return (
        <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
};

export const useFavoritos = () => useContext(FavoritosContext);
