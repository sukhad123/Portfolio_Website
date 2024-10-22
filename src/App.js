import logo from './logo.svg';
import './App.css';
import Navbar from  "./Components/navbar"
import {Example} from "./Components/techStack";
import Loading from "./loading";
import { useEffect, useState } from "react";

function App() {
 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return <Loading/>
  }
  return (
    <div>
  <Example/>
  <Navbar/>
  </div>
     
  );
}

export default App;
