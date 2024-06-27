import './App.css';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Info from './components/Info';
import Main from './components/Main';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Info/>
      <Skills/>
      <Experiences/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
