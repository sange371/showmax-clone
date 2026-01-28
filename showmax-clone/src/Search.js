import React, {useState , useEffect } from 'react';
import './Navbar.css';

export default function Search() {
    
   const [movies, setMovies]=useState([]);
   const [comedy, setComedy]=useState([]);
   const [drama, setDrama]=useState([]);
   const [action, setAction]=useState([]);
   const [adventure, setAdventure]=useState([]);
   const [animation, setAnimation]=useState([]);
   const [documentary, setDocumentary]=useState([]);
   const [musical, setMusical]=useState([]);
   const [romance, setRomance]=useState([]);

   const [comedyShows, setComedyShows]=useState([]);
   const [dramaShows, setDramaShows]=useState([]);
   const [actionShows, setActionShows]=useState([]);
   const [animationShows, setAnimationShows]=useState([]);
   const [comingSoon, setComingSoon]=useState([]);
   

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

   const comedyTvUrl="https://api.themoviedb.org/3/discover/tv?with_genres=35&api_key=";
   const dramaTvUrl="https://api.themoviedb.org/3/discover/tv?with_genres=18&api_key=";
   const actionTvUrl="https://api.themoviedb.org/3/discover/tv?with_genres=10759&api_key=";
   const animationTvUrl="https://api.themoviedb.org/3/discover/tv?with_genres=16&api_key=";
   const comingSoonUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=";

   useEffect(() => {
    fetch(`${comedyTvUrl}${apiKey}`).then(response => response.json()).then(data => {
        setComedyShows(data.results || []);
    }).catch(error => {
        console.error("Error fetching data: ",error);
    })
    fetch(`${dramaTvUrl}${apiKey}`).then(response => response.json()).then(data => {
        setDramaShows(data.results || []);
    }).catch(error => {
        console.error("Error fetching data: ",error);
    })
    fetch(`${actionTvUrl}${apiKey}`).then(response => response.json()).then(data =>{
        setActionShows(data.results || []);
    }).catch(error => {
        console.error("Error fetching data: ",error);
    })
    fetch(`${animationTvUrl}${apiKey}`).then(response => response.json()).then(data => {
        setAnimationShows(data.results || []);
    }).catch(error => {
        console.error("Error fetching data: ",error);
    })
    fetch(`${comingSoonUrl}${apiKey}`).then(response => response.json()).then(data => {
        setComingSoon(data.results || []);
    }).catch(error => {
        console.error("Error fetching data: ",error);
    })
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
            
          <h3>Trending</h3>
          <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {movies.filter(movie => movie.poster_path).map(movie => (
                <img key={movie.id} src={imageUrl + movie.poster_path} alt={movie.title || movie.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          <h3>Coming Soon</h3>
          <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {comingSoon.filter(coming => coming.poster_path).map(coming => (
                <img key={coming.id} src={imageUrl + coming.poster_path} alt={coming.title || coming.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>
          

          <h3>Comedy</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {comedy.filter(comedies => comedies.poster_path).map(comedies => (
                <img key={comedies.id} src={imageUrl + comedies.poster_path} alt={comedies.title || comedies.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
            {comedyShows.filter(comedyShow => comedyShow.poster_path).map(comedyShow => (
                <img key={comedyShow.id} src={imageUrl + comedyShow.poster_path} alt={comedyShow.title || comedyShow.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>

          <h3>Drama</h3>
          <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {drama.filter(dramas => dramas.poster_path).map(dramas => (
                <img key={dramas.id} src={imageUrl + dramas.poster_path} alt={dramas.title || dramas.name } style={{width:"150px",borderRadius:"8px"}} />
            ))}
            {dramaShows.filter(dramaShow => dramaShow.poster_path).map(dramaShow => (
                <img key={dramaShow.id} src={imageUrl + dramaShow.poster_path} alt={dramaShow.title || dramaShow.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
          </div>


          <h3>Action</h3>
          <div style={{display:"flex",gap:"10px",overflowX:"scroll"}}>
            {action.filter(actions => actions.poster_path).map(actions =>(
                <img key={actions.id} src={imageUrl + actions.poster_path} alt={actions.title || actions.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
            {actionShows.filter(actionShow => actionShow.poster_path).map(actionShow =>(
                <img key={actionShow.id} src={imageUrl + actionShow.poster_path} alt={actionShow.title || actionShow.name} style={{width:"150px",borderRadius:"8px"}} />
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
            {animationShows.filter(animationShow => animationShow.poster_path).map(animationShow =>(
                <img key={animationShow.id} src={imageUrl + animationShow.poster_path} alt={animationShow.title || animationShow.name} style={{width:"150px",borderRadius:"8px"}} />
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
