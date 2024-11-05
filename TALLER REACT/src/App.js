import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Galeria from './pages/main/components/Galeria'; 
import Navbar from './pages/main/components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='main-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />}/>
          <Route path="/galeria" element={<Galeria />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
