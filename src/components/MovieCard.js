import Icons from './Icons';


const MovieCard=({image,...props})=>{
    // const[added,setAdded]=useState(false)


      

    return(
        <div className="movie-card" >
            <img src={image} alt="movie poster" />
            <div className="navigations">
                <Icons className='nav-icons'><svg  width="10" height="10" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z" fill="black"></path></svg></Icons>
                <Icons  {...props} className='nav-icons'><svg width="10" height="10" viewBox="0 0 24 24" fill="none"  class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg></Icons>
      
            </div>
        </div>
    )
}


export default MovieCard;

{/* <svg fill="none" 
                width='10'
                height="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"/></svg> */}