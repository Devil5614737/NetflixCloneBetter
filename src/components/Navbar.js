import "../styles/navbar.css";
import Logo from '../assets/logo3.png';
import Bell from '../assets/bell.svg';
import Search from '../assets/search.svg';
import { useContext, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Context } from "../Context/Context";

const Navbar=()=>{
    const{setSearchQuery}=useContext(Context);
    const navigate=useNavigate();
useEffect(()=>{
    const toggleSearchBar=()=>{
        const searchIcon=document.querySelector('.search')
        const searchContainer=document.querySelector('.search-container')
        searchIcon.addEventListener('click',()=>{
            searchContainer.classList.toggle('active')
        })
    }

const toggleNavbar=()=>{
const navbar=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if(window.scrollY>150){
        return navbar.classList.add('active')
    }else{
        return navbar.classList.remove('active')
    }
})
}
const logoutModal=()=>{
const avatar=document.getElementById('avatar')
const logout=document.querySelector('.logout-modal')
avatar.addEventListener('click',()=>{
    return logout.classList.toggle('active')
})
}
    logoutModal()
    toggleSearchBar()
    toggleNavbar()
})


const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
}



    return(
        <div className="navbar">
            <hero className="hero">
                <div className="left">
                    <img src={Logo} alt="netflix logo" />
                    <ul>
                        <li><Link to='/home'><a href="#">Home</a></Link></li>
                        {/* <li><a href="#">Series</a></li>
                        <li><a href="#">Films</a></li>
                        <li><a href="#">New & Popular</a></li> */}
                        <li><Link to='/mylist'><a href="#">My List</a></Link></li>
                        {/* <li><a href="#">Browse</a></li> */}
                    </ul>
                </div>
                <div className="right">
                    <div className="search-container ">
                        <input type="text" placeholder="search by name" onChange={(e)=>setSearchQuery(e.target.value)}/>
                        <img src={Search} alt="avatar"  className="search" />
                   
                    </div>
                 <img src={Bell} alt="bell icon" className="bell" />
                 <img id="avatar" src="https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" alt="avatar icon" className="avatar"/>
                </div>
            </hero>
            <div className="logout-modal">
                <p onClick={handleLogout}>Logout</p>
                <p onClick={()=>navigate('/whowatching')}>Go to profiles</p>
            </div>
        </div>
    )
}


export default Navbar;