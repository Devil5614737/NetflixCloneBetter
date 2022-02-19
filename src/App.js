import Home from "./pages/Home";
import "./styles/global.css";
import usePosters from "./hooks/usePosters";
import useMovieThumbnail from "./hooks/useMovieThumbnails";
import { Context } from "./Context/Context";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Intro from "./pages/Intro";
import WhoWatching from "./pages/WhoWatching";
import { useState } from "react";
import MyList from "./pages/MyList";
import SearchResults from "./pages/SearchResults";
import { useEffect } from "react";

function App() {
  const navigate=useNavigate()
  const[user,setUser]=useState([null])
  const[myLists,setMyLists]=useState([])
  const[searchQuery,setSearchQuery]=useState("")
  const[searchData,setSearchData]=useState([])
  const posters = usePosters();
  const trending = useMovieThumbnail();

// query link=https://api.themoviedb.org/3/search/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&query=lucifer


useEffect(()=>{

  const searchResults=async()=>{
 
      const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&query=${searchQuery}`)
      const data=await res.json();
      setSearchData(data.results)


        setTimeout(()=>{
          navigate('/results')
        },2000)
      
   
  }
  searchResults();
},[searchQuery])

let searchResults=searchData&&searchData.map(item=>item.backdrop_path)




  return (
    <Context.Provider value={{myLists,setMyLists,setUser,user, posters, trending,searchQuery,setSearchQuery,searchData,searchResults }}>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/whowatching" element={<WhoWatching/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mylist" element={<MyList/>}/>
        <Route path="/results" element={<SearchResults/>}/>
      </Routes>
    </Context.Provider>
  );
}

export default App;
