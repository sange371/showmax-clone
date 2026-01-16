import React, {useState, useEffect} from 'react';
import './Navbar.css';


export default function Homefile() {
    
   const [movies, setMovies]=useState([]);
   const [comedy, setComedy]=useState([]);
   const [drama, setDrama]=useState([]);
   const [action, setAction]=useState([]);
   const [adventure, setAdventure]=useState([]);
   const [animation, setAnimation]=useState([]);
   const [documentary, setDocumentary]=useState([]);
   const [musical, setMusical]=useState([]);
   const [romance, setRomance]=useState([]);
   

   const apiKey="cccd0e5a450323800f353cae765da1cc";
   const apiUrl="https://api.themoviedb.org/3/trending/all/day?api_key=";
   const imageUrl="https://image.tmdb.org/t/p/w500";

   const comedyUrl="https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=";
   const dramaUrl="https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=";
   const actionUrl="https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=";
   const adventureUrl="https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key=";
   const animationUrl="https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=";
   const documentaryUrl="https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=";
   const musicalUrl="https://api.themoviedb.org/3/discover/movie?with_genres=10402&api_key=";
   const romanceUrl="https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=";

   useEffect(() => {
    fetch(`${apiUrl}${apiKey}`).then(response => response.json()).then(data => {
        setMovies(data.results || []);
    }).catch(error => {
        console.error("Error fetching data: ", error);
    })
    fetch(`${comedyUrl}${apiKey}`).then(response => response.json()).then(data => {
        setComedy(data.results || []);
    }).catch(error =>{
        console.error("Error fetching data: ",error);
    })
    fetch(`${dramaUrl}${apiKey}`).then(response => response.json()).then(data => {
        setDrama(data.results || []);
    }).catch(error => {
        console.error("Error fetching data: ",error);
    })
    fetch(`${actionUrl}${apiKey}`).then(response => response.json()).then(data => {
        setAction(data.results || []);
    }).catch(error => {
        console.error("Error fetching data:",error);
    })
    fetch(`${adventureUrl}${apiKey}`).then(response => response.json()).then(data => {
        setAdventure(data.results || []);
    })
    fetch(`${animationUrl}${apiKey}`).then(response => response.json()).then(data => {
        setAnimation(data.results || []);
    })
    fetch(`${documentaryUrl}${apiKey}`).then(response => response.json()).then(data => {
        setDocumentary(data.results || []);
    })
    fetch(`${musicalUrl}${apiKey}`).then(response => response.json()).then(data => {
        setMusical(data.results || []);
    })
    fetch(`${romanceUrl}${apiKey}`).then(response => response.json()).then(data => {
        setRomance(data.results || []);
    })

   },[]);



    return (
        <div>
            {movies.length > 0 && (
                <div
                    style={{
                    height: "70vh",
                    backgroundImage: `url(${imageUrl.replace("w500", "original")}${movies[0].backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "40px",
                   }}
                >
                <div>
                    <h1>{movies[0].name}</h1>
                    <p style={{ maxWidth: "500px" }}>
                        {movies[0].overview}
                    </p>
                </div>
        </div>
    )}
          <h3>Trending</h3>
          <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {movies.filter(movie => movie.poster_path).map(movie => (
                <img key={movie.id} src={imageUrl + movie.poster_path} alt={movie.title || movie.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Comedy</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {comedy.filter(comedies => comedies.poster_path).map(comedies => (
                <img key={comedies.id} src={imageUrl + comedies.poster_path} alt={comedies.title || comedies.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Drama</h3>
          <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {drama.filter(dramas => dramas.poster_path).map(dramas => (
                <img key={dramas.id} src={imageUrl + dramas.poster_path} alt={dramas.title || dramas.name } style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Action</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {action.filter(actions => actions.poster_path).map(actions =>(
                <img key={actions.id} src={imageUrl + actions.poster_path} alt={actions.title || actions.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Adventure</h3>
          <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {adventure.filter(adventures => adventures.poster_path).map(adventures => (
                <img key={adventures.id} src={imageUrl + adventures.poster_path} alt={adventures.title || adventures.name} style={{width:"150px", borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Animation</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {animation.filter(animations => animations.poster_path).map(animations => (
                <img key={animations.id} src={imageUrl + animations.poster_path} alt={animations.title || animations.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Documentary</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {documentary.filter(documentaries => documentaries.poster_path).map(documentaries => (
                <img key={documentaries.id} src={imageUrl + documentaries.poster_path} alt={documentaries.title || documentaries.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Musical</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {musical.filter(music => music.poster_path).map(music => (
                <img key={music.id} src={imageUrl + music.poster_path} alt={music.title || music.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Romance</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {romance.filter(romances => romances.poster_path).map(romances => (
                <img key={romances.id} src={imageUrl + romances.poster_path} alt={romances.title || romances.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          
        </div>
    );
}