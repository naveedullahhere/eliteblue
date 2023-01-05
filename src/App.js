import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { AnimatedRoutes } from './components/AnimatedRoutes/Routes';
import { Loader } from './components/Preloader/Loader';
import { toast, Toaster } from "react-hot-toast";
import { AppContext } from "./components/context/AppContext.js";
import { useEffect, useState } from 'react';


function App() {
  const [teams, setTeams] = useState([]);
  const [teamsImgPath, setTeamsImgPath] = useState("");



  useEffect(() => {
    fetchTeams();
  }, []);


  const fetchTeams = () => {
    fetch(`https://eliteblue.net/e-panel/public/api/team-member`)
      .then((response) => response.json())
      .then((actualData) => { setTeams(actualData.team); setTeamsImgPath(actualData.media_path); })
      .catch((err) => {
        toast.error("something went wrong!");
      }
      );
  }


  var values = {
    teams, teamsImgPath
  }


  return (
    <>
      <AppContext.Provider value={values}>
        <BrowserRouter>
          <Loader />
          <Home />
          <Header />
          <AnimatedRoutes />
          <Footer />
          <Toaster position="top-right" />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;



