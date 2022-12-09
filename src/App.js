import './App.css';
import config from './config';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { HomeSections } from './components/HomeSections/HomeSections';

function App() {
  return (
    <>
      <Home />
      <Header />
      <HomeSections />
      <Footer />
    </>

  );
}

export default App;
