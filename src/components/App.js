import '../App.css';
import Navbar from './Navbar'
import { Route, Switch } from "react-router-dom";
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Blog from './Blog'
import {useState} from 'react'

function App() {

  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
    console.log('scroll')
  }

  return (
    <div id='root-div' onScroll={handleScroll}>



      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Blog />

    </div>
  );
}

export default App;
