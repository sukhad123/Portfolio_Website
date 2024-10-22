import logo from './logo.svg';
import './App.css';
import Navbar from  "./Components/navbar"
import {Example} from "./Components/techStack";
import Loading from "./loading";
import { useEffect, useState } from "react";

function App() {
 


  //loading for 5 seconds
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => setLoading(false), 5000)
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
