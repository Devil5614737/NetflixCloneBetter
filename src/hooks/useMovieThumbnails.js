import { useEffect, useState } from "react";
import { trendings,actionMovies,topRated,horror,comedy,documentaries } from "../apiLinks";

const useMovieThumbnail=()=>{
    const [trending, setTrending] = useState([]);
    const [topRateds, setTopRated] = useState([]);
    const [comedies, setComedies] = useState([]);
    const [horrors, setHorrors] = useState([]);
    const [actions, setActions] = useState([]);
    const [documentary, setDocumentary] = useState([]);

    useEffect(() => {
        async function getPosters() {
          const res = await fetch(trendings);
          const data = await res.json();
          setTrending(data.results)
        }
        async function getActionMovies() {
          const res = await fetch(actionMovies);
          const data = await res.json();
          setActions(data.results)
        }
        async function getDocumentaries() {
          const res = await fetch(documentaries);
          const data = await res.json();
          setDocumentary(data.results)
        }
        async function getTopRated() {
          const res = await fetch(topRated);
          const data = await res.json();
          setTopRated(data.results)
        }
        async function getComedies() {
          const res = await fetch(comedy);
          const data = await res.json();
          setComedies(data.results)
        }
        async function getHorrors() {
          const res = await fetch(horror);
          const data = await res.json();
          setHorrors(data.results)
        }
    getPosters() ;
    getActionMovies();
    getComedies();
    getDocumentaries();
    getTopRated()
    getHorrors()
      }, []);


    return [trending,topRateds,comedies,horrors,actions,documentary]
}

export default useMovieThumbnail;