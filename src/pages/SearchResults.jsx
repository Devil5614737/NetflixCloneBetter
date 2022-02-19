import React from 'react'
import Navbar from '../components/Navbar';
import  {useContext} from 'react';
import {Context} from '../Context/Context';
import '../styles/searchResults.css';



function SearchResults() {
    const{searchResults}=useContext(Context);

    const imageLink = "https://image.tmdb.org/t/p/original";

  return (
    <>
    <Navbar/>
    <div className="results">
        <div className="results-container">
            {searchResults&&searchResults.map(item=> <img src={imageLink+item} alt="poster" className="result" />)}
           
           
        </div>
    </div>
    </>
  )
}

export default SearchResults;