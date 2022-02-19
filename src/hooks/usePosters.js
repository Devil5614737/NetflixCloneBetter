import { useState, useEffect } from "react";
import { trendings } from "../apiLinks";

const usePosters = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    async function getPosters() {
      const res = await fetch(trendings);
      const data = await res.json();
      setPosters(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }
    getPosters();
  }, []);
  return [posters];
};


export default usePosters;