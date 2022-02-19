import React from 'react';
import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Context } from '../Context/Context';
import '../styles/movielist.css';


function MyList() {
  const {myLists}=useContext(Context);



  return <>
      <Navbar/>
      <div className="wrapper">
        <div className="movie-list-container">
          <div className="top-heading">
            <h3>My List</h3>
          </div>
          <div className="movie-list">
            {myLists&&myLists.map(item=> <div className="movie-list-thumbnails">
              <img src={item.img} alt="posters" />
            </div>)}
           
           
          </div>
        </div>
      </div>
  </>;
}

export default MyList;
