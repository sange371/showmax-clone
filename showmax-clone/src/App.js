
import './App.css';
import Movies from './Movies';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homefile from './Homefile';
import TvShows from './TvShows';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homefile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
      </Routes>
    </div>
  );
}

export default App;
