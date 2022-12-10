import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import config from './config';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { HomeSections } from './components/HomeSections/HomeSections';
import { About } from './components/AboutUs/About';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Home />
        <Header />
        <Routes>
          <Route path="/" element={<HomeSections />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
