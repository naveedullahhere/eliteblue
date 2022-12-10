import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';

import { AnimatedRoutes } from './components/AnimatedRoutes/Routes';

function App() {


  return (
    <>
      <BrowserRouter>
        <Home />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;



