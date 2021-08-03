import '../App.css';
import Navbar from './Navbar'
import { Route, Switch } from "react-router-dom";
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Blog from './Blog'


function App() {
  return (
    <div id='root-div'>



      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />

    </div>
  );
}

export default App;
