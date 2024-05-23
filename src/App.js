import Navebar from "./Header/Navebar";
import Main from "./Main/Main";
import Skill from "./Skill/Skill";
import { Portfolio } from "./Portfolio/Portfolio";
import Contact from "./Contect me/Contact";
import Footer from "./Footer/Footer";

function App() {
 
  return (
    <div className="App">
    <Navebar />
    <Main />
    <Skill />
    < Portfolio />
     <Contact/>
     <Footer />     
    </div>
  );
}

export default App;
