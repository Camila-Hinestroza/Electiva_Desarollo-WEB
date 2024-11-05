import React, { useEffect, useState } from 'react';
import { fetchRandomImages } from '../../../services/Api';
import ImagenIndividual from './ImagenIndividual';
import '../../../styles/Galeria.css'; 

const Galeria = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageCount, setImageCount] = useState(3); 

  const handleImageCountChange = (count) => {
    setImageCount(count);
    setLoading(true); // Opcional: indica que se están cargando nuevas imágenes
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchRandomImages(imageCount);
        setImages(data);
      } catch (error) {
        setError('Failed to load images');
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, [imageCount]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="galeria">
      <h1>Galeria de imagenes</h1>
      <h5>Y sus fotografos</h5>
      <button className="galeria-button" onClick={() => handleImageCountChange(5)}>Mostrar 2 Imágenes mas</button>
      <button className="galeria-button" onClick={() => handleImageCountChange(10)}>Mostrar 5 Imágenes mas</button>
      <button className="galeria-button" onClick={() => handleImageCountChange(20)}>Mostrar 10 Imágenes mas</button>
      <div className="imagen-lista">
        {images.map((image) => (
          <ImagenIndividual key={image.id} image={image} />
        ))}
      </div>    
    </div>
  );
};

export default Galeria;
