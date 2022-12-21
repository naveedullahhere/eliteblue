import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { AnimatedRoutes } from './components/AnimatedRoutes/Routes';
import { Loader } from './components/Preloader/Loader';
import { Toaster } from "react-hot-toast";

function App() {


  return (
    <>
      <BrowserRouter>
        <Loader />
        <Home />
        <Header />
        <AnimatedRoutes />
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;



