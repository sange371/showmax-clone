import React, {useState,useEffect}from 'react';

import './Navbar.css';

export default function Movies(){
    const [greatAnimations, setGreatAnimations]=useState([]);
    const [heroAnimations, setHeroAnimations]=useState([]);
    const [adventureAnimations, setAdventureAnimations]=useState([]);
    const [actionAnimations, setActionAnimations]=useState([]);
    const [comedyAnimations, setComedyAnimations]=useState([]);
    const [musicalAnimations, setMusicalAnimations]=useState([]);
    const [animalFriendsAnimations, setAnimalFriendsAnimations]=useState([]);
    const [educationalAnimations, setEducationalAnimations]=useState([]);
    const [topRated, setTopRated]=useState([]);

    const apiKey="cccd0e5a450323800f353cae765da1cc";
    const imageUrl="https://image.tmdb.org/t/p/w500";

    const greatAnimationsUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,10751&language=en-US&sort_by=popularity.desc&page=1`;
    const heroUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,28&language=en-US&sort_by=popularity.desc&page=1`;
    const adventureUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,12&language=en-US&sort_by=popularity.desc&page=1`;
    const actionUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,28&language=en-US&sort_by=popularity.desc&page=1`;
    const comedyUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,35&language=en-US&sort_by=popularity.desc&page=1`;
    const musicalUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,10402&language=en-US&sort_by=popularity.desc&page=1`;
    const animalFriendsUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,10751,12&language=en-US&sort_by=popularity.desc&page=1`;
    const educationalUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16,10751&language=en-US&sort_by=popularity.desc&page=1`; 
    const topAnimationUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000&page=1`;

    useEffect(() => {
        fetch(`${topAnimationUrl}`).then(response => response.json()).then(data => {
            setTopRated(data.results || []);

        }).catch(error => {
            console.error("Error fetching data: ",error);
        })

        fetch(`${educationalUrl}`).then(response => response.json()).then(data => {
            setEducationalAnimations(data.results || []);
        }).catch(error => {
            console.error("Error fetching data: ",error);
        })

        fetch(`${animalFriendsUrl}`).then(response => response.json()).then(data => {
            setAnimalFriendsAnimations(data.results || []);

        }).catch(error => {
            console.error("Error fetching data: ",error);
        })

        fetch(`${musicalUrl}`).then(response => response.json()).then(data => {
            setMusicalAnimations(data.results || []);
        }).catch(error => {
            console.error("Error fetching data: ",error);
        })

        fetch(`${comedyUrl}`).then(response => response.json()).then(data => {
            setComedyAnimations(data.results || []);
        }).catch(error => {
            console.error("Error fetching data: ", error);
        })

        fetch(`${actionUrl}`).then(response => response.json()).then(data => {
            setActionAnimations(data.results || []);
        }).catch(error => {
            console.error("Error fetching data: ",error);
        })

        fetch(`${adventureUrl}`).then(response => response.json()).then(data => {
            setAdventureAnimations(data.results || []);
        }).catch(error => {
            console.error("Error fetching data: ",error);
        })

        fetch(`${heroUrl}`).then(response => response.json()).then(data => {
            setHeroAnimations(data.results || []);
        }).catch(error => {
            console.error("Error fetching data: ",error);
        })

       

        fetch(`${greatAnimationsUrl}`).then(response => response.json()).then(data => {
            setGreatAnimations(data.results || []);
        }).catch(error => {
            console.error("Error fetching data: ",error);
        })


    })
        

    return(
        <div className="movies">
            {greatAnimations.length > 0 && (
                <div
                    style={{
                    height: "70vh",
                    backgroundImage: `url(${imageUrl.replace("w500", "original")}${greatAnimations[0].backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "40px",
                    
                   }} className="movie-image"
                >
                <div>
                    <h1>{greatAnimations[0].name || greatAnimations[0].title}</h1>
                    <p style={{ maxWidth: "500px" }}>
                        {greatAnimations[0].overview}
                    </p>
                </div>
        </div>
    )}
        <h3>Great Animations</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {greatAnimations.filter(movie => movie.poster_path).map(movie => (
                <img key={movie.id} src={imageUrl + movie.poster_path} alt={movie.title || movie.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div> 

        <h3>Heroes</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {heroAnimations.filter(hero => hero.poster_path).map(hero=> (
                <img key={hero.id} src={imageUrl + hero.poster_path} alt={hero.title || hero.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div> 

        <h3>Adventure</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {adventureAnimations.filter(adventure => adventure.poster_path).map(adventure=> (
                <img key={adventure.id} src={imageUrl + adventure.poster_path} alt={adventure.title || adventure.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div> 
        <h3>Action</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {actionAnimations.filter(action => action.poster_path).map(action => (
                <img key={action.id} src={imageUrl + action.poster_path} alt={action.title || action.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div>

        <h3>Comedy</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {comedyAnimations.filter(laughter => laughter.poster_path).map(laughter => (
                <img key={laughter.id} src={imageUrl + laughter.poster_path} alt={laughter.title || laughter.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div> 

        <h3>Sing and Dance</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {musicalAnimations.filter(music => music.poster_path).map(music => (
                <img key={music.id} src={imageUrl + music.poster_path} alt={music.title || music.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div>

        <h3>Animal Friends</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {animalFriendsAnimations.filter(friend => friend.poster_path).map(friend => (
                <img key={friend.id} src={imageUrl + friend.poster_path} alt={friend.title || friend.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div> 

        <h3>Play and Learn</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {educationalAnimations.filter(learn => learn.poster_path).map(learn => (
                <img key={learn.id} src={imageUrl + learn.poster_path} alt={learn.title || learn.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div> 

        <h3>Top Rated</h3>
        <div style={{display:"flex", gap:"10px", overflowX:"scroll"}}>
            {topRated.filter(top => top.poster_path).map(top => (
                <img key={top.id} src={imageUrl + top.poster_path} alt={top.title || top.name} style={{width:"150px",borderRadius:"8px"}} />
            ))}
        </div> 
      

            
            
        </div>
    );
}
