
import './App.css';
import Kids from './Kids';
import Navbar from './Navbar';
import Homefile from './Homefile';
import TvShows from './TvShows';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homefile />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/tv-shows" element={<TvShows />} />
      </Routes>
    </div>
  );
}

export default App;
