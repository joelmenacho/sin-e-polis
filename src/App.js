import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrimaryLayout from './layouts/PrimaryLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/peliculas" element={<h1>Peliculas</h1>} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;