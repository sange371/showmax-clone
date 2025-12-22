
import './App.css';
import Movies from './Movies';

function App() {
  return (
    <div className="App">
     
      <h1>Showmax Clone</h1>
      <form>
        <input type="search" placeholder="search for movies or series" className="search" />
        <input type="submit" value="Search" className="search-button"/>
      </form>
      <Movies />
    </div>
  );
}

export default App;
