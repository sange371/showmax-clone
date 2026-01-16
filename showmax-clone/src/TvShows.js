import React, {useState, useEffect} from 'react';
import  './Navbar.css';

export default function TvShows() {
    
    const [recentShows, setRecentShows]=useState([]);
    const [topShows, setTopShows]=useState([]);
    const [realityShows, setRealityShows]=useState([]);
    const [saContent, setSaContent]=useState([]);
    const [animationShows, setAnimationShows]=useState([]);
    const[documentaryShows, setDocumentaryShows]=useState([]);
    const [kidShows, setKidShows]=useState([]);
    const [mysteryShows, setMysteryShows]=useState([]);





    const apiKey="cccd0e5a450323800f353cae765da1cc";
   
    const recentShowsUrl="https://api.themoviedb.org/3/tv/on_the_air?api_key=";
    const topShowsUrl="https://api.themoviedb.org/3/discover/tv?sort_by=vote_average.desc&vote_count.gte=500&api_key=";
    const realityTvUrl="https://api.themoviedb.org/3/discover/tv?with_genres=10764&api_key=";
    const saContentUrl="https://api.themoviedb.org/3/discover/tv?with_origin_country=ZA&api_key=";
    const animationShowsUrl="https://api.themoviedb.org/3/discover/tv?with_genres=16&api_key=";
    const documentaryShowsUrl="https://api.themoviedb.org/3/discover/tv?with_genres=99&api_key=";
    const kidShowsUrl="https://api.themoviedb.org/3/discover/tv?with_genres=10751&api_key=";
    const mysteryShowsUrl="https://api.themoviedb.org/3/discover/tv?with_genres=9648&api_key=";


    const imageUrl="https://image.tmdb.org/t/p/w500";


    
    useEffect(()=>{
        

        fetch(`${recentShowsUrl}${apiKey}`).then(response => response.json()).then(data =>{
            setRecentShows(data.results || []);

        }).catch(error=> {
            console.error("Error fetching data: ",error);
        })

        fetch(`${topShowsUrl}${apiKey}`).then(response => response.json()).then(data =>{
            setTopShows(data.results || []);
        }).catch(error=>{
            console.error("Error fetching data: ",error);
        })

        fetch(`${realityTvUrl}${apiKey}`).then(response => response.json()).then(data =>{
            setRealityShows(data.results || []);
        }).catch(error=>{
            console.error("Error fetching data: ",error);
        })

        fetch(`${saContentUrl}${apiKey}`).then(response => response.json()).then(data =>{
            setSaContent(data.results || []);
        }).catch(error=>{
            console.log("Error fetching data:",error);
        })

        fetch(`${animationShowsUrl}${apiKey}`).then(response => response.json()).then(data =>{
            setAnimationShows(data.results || []);
        }).catch(error =>{
            console.log("Error fetching data:",error);
        })

        fetch(`${documentaryShowsUrl}${apiKey}`).then(response => response.json()).then(data => {
            setDocumentaryShows(data.results || []);
        }).catch(error => {
            console.error("Error fetching data:", error);
        })

        fetch(`${kidShowsUrl}${apiKey}`).then(response => response.json()).then(data => {
            setKidShows(data.results || []);
        }).catch(error =>{
            console.log("Error fetching data:" ,error);
        })

        fetch(`${mysteryShowsUrl}${apiKey}`).then(response => response.json()).then(data => {
            setMysteryShows(data.results || []);
        }).catch(error => {
            console.error("Error fetching data:" , error);
        })
    

    },[]);
    


    return (
        <div>
            {recentShows.length > 0 && (
                <div
                    style={{
                    height: "70vh",
                    backgroundImage: `url(${imageUrl.replace("w500", "original")}${recentShows[0].backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "40px",
                   }}
                >
                <div>
                    <h1>{recentShows[0].name}</h1>
                    <p style={{ maxWidth: "500px" }}>
                        {recentShows[0].overview}
                    </p>
                </div>
        </div>
    )}
        

            <h3>Recent Shows</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}} >
                {recentShows.filter(recentShow => recentShow.poster_path).map(recentShow => (
                    <img key={recentShow.id} src={imageUrl + recentShow.poster_path} alt={recentShow.title || recentShow.name} style={{width:"150px", borderRadius:"8px"}} />
                ))}
            </div>
            
            <h3>Top Shows</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}}>
                {topShows.filter(topShow => topShow.poster_path).map(topShow => (
                    <img key={topShow.id} src={imageUrl + topShow.poster_path} alt={topShow.title || topShow.name} style={{width:"150px", borderRadius:"8px"}} />
                ))}
            </div>
            
            <h3>Reality Shows</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}}>
                {realityShows.filter(realityShow => realityShow.poster_path).map(realityShow => (
                    <img key={realityShow.id} src={imageUrl + realityShow.poster_path} alt={realityShow.title || realityShow.name} style={{width:"150px",borderRadius:"8px"}} />
                ))}
            </div>
            
            <h3>South African Content</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}}>
                {saContent.filter(content => content.poster_path).map(content => ( 
                    <img key={content.id} src={imageUrl + content.poster_path} alt={content.title || content.name} style={{width:"150px",borderRadius:"8px"}} />
                ))}
            </div>

            <h3>Animation Shows</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}}>
                {animationShows.filter(animation => animation.poster_path).map(animation => (
                    <img key={animation.id} src={imageUrl + animation.poster_path} alt={animation.title || animation.name} style={{width:"150px", borderRadius:"8px"}} />
                ))}
            </div>

            <h3>Documentary Shows</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}}>
                {documentaryShows.filter(documentary => documentary.poster_path).map(documentary => (
                    <img key={documentary.id} src={imageUrl + documentary.poster_path} alt={documentary.title || documentary.name} style={{width:"150px",borderRadius:"8px"}} />
                ))}
            </div>

            <h3>Kid Shows</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}}>
                {kidShows.filter(kidShow => kidShow.poster_path).map(kidShow => (
                    <img key={kidShow.id} src={imageUrl + kidShow.poster_path} alt={kidShow.title || kidShow.name} style={{width:"150px",borderRadius:"8px"}} />
                ))}
            </div>

            <h3>Mystery Shows</h3>
            <div style={{display:"flex",gap:"10px", overflowX:"scroll"}}>
                {mysteryShows.filter(mystery => mystery.poster_path).map(mystery => (
                    <img key={mystery.id} src={imageUrl + mystery.poster_path} alt={mystery.title || mystery.name} style={{width:"150px", borderRadius:"8px"}} />
                ))}              
           </div>
        </div>
        
    )
}