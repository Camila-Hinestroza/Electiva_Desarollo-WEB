import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Galeria from './pages/galeria/Galeria'; 
import Navbar from './pages/galeria/components/Navbar';
import Favoritos from './pages/favoritos/Favoritos';
import { FavoritosProvider } from './pages/favoritos/components/FavoritosContexto';
//import Main from './pages/main/Main';

function App() {
  return (
    <BrowserRouter>
    <FavoritosProvider>
      <Navbar />
      <div className='main-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/galeria" element={<Galeria />} /> 
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </div>
    </FavoritosProvider>
    </BrowserRouter>
  );
}

export default App;
