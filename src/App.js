import './App.css'
import Navbar from './componentss/navbar/navbar';
import Home from './componentss/home/home';
import Intro from './componentss/introduction/intro';
import Work from './componentss/My work/work';
import Exp from './componentss/Experience/exp';
import Achievements from './componentss/Acheivements/achievements ';
import Leadership from './componentss/Leadership/leadership';
import Contact from './componentss/Contact/contact';


function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <Intro />
      <Work />
      <Exp />
      <Achievements/>
      <Leadership />
      <Contact />
    </>
  );
}

export default App;
