import React, { useContext, useEffect, useState,useCallback } from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import MovieCard from "../components/MovieCard";
import { Context } from "../Context/Context";
import { addDoc, collection,getDocs } from "firebase/firestore";
import { auth, db } from "../Firebase/config";



const imageLink = "https://image.tmdb.org/t/p/original";

function Home() {
  const { posters,trending ,setMyLists,user} = useContext(Context);
  const[list,setList]=useState([])
  const heroImage = imageLink+posters[0].backdrop_path;


const homeStyle={
  background:`url(${heroImage})`,
  backgroundSize:'cover',
  backgroundPosition:'center',
  width:'100%',
  height:'100vh'
}
function trimmed(str,n){
if(str&&str.split(' ').length>n){
const a=str.slice(0,129)+'...'
return a
}
}
let b=trimmed(posters[0]&&posters[0].overview,40)


const myList=collection(db,"myList")

const addToMylist=async(img)=>{
  await addDoc(myList,{
    img:imageLink+img,
    user:{id:auth.currentUser.uid}
    
})
}

useEffect(()=>{
  const getMyList=async()=>{
    const data=await getDocs(myList);
    setList(data.docs.map((doc)=>({...doc.data()})))
  }
  getMyList()
},[addToMylist])

const uid=user.uid


useEffect(()=>{
  const filteredList=()=>{
  let lists=list.filter(myList=>myList.user.id===uid);
  setMyLists(lists)
  }
  filteredList()
},[])







  return (
    <>
      <div className="hero-container" style={homeStyle}>
        <div
          className="hero" 
         
        >
          <Navbar />

          <div className="movie-info-container">
            <div className="movie-info">
              <h3>{posters[0]&&posters[0].original_title ||posters[0]&&posters[0].title}</h3>
              <p>
            {b}
              </p>
              <div className="button-container">
                <Button className="play-btn">
                  <svg
                    style={{ marginRight: "8px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      d="M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  Play
                </Button>
                <Button className="info-btn">
                  <svg
                    style={{ marginRight: "8px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="movie-rows">
        <div className="movie-rows-container">
          <p className="movie-type">Originals</p>
          <div className="movies">
            {trending[0].slice(0,7).map(thumbnails=><MovieCard image={imageLink+thumbnails.backdrop_path} onClick={()=>addToMylist(thumbnails.backdrop_path)}/>  )}
         
           
          </div>
        </div>
        <div className="movie-rows-container">
          <p className="movie-type">Only on Netflix</p>
          <div className="movies">
            {trending[2].slice(0,7).map(thumbnails=>   <MovieCard image={imageLink+thumbnails.backdrop_path} onClick={()=>addToMylist(thumbnails.backdrop_path)}/>)}
         
           
          </div>
        </div>
        <div className="movie-rows-container">
          <p className="movie-type">Comedies</p>
          <div className="movies">
            {trending[3].slice(0,7).map(thumbnails=>   <MovieCard image={imageLink+thumbnails.backdrop_path} onClick={()=>addToMylist(thumbnails.backdrop_path)}/>)}
         
           
          </div>
        </div>
        <div className="movie-rows-container">
          <p className="movie-type">Documentaries</p>
          <div className="movies">
            {trending[4].slice(0,7).map(thumbnails=>   <MovieCard image={imageLink+thumbnails.backdrop_path} onClick={()=>addToMylist(thumbnails.backdrop_path)}/>)}
         
           
          </div>
        </div>
        <div className="movie-rows-container">
          <p className="movie-type">Top Rated</p>
          <div className="movies">
            {trending[5].slice(0,7).map(thumbnails=>   <MovieCard image={imageLink+thumbnails.backdrop_path} onClick={()=>addToMylist(thumbnails.backdrop_path)}/>)}
         
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
