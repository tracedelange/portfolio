import '../App.css';
import Navbar from './Navbar'
import { Route, Switch, Redirect } from "react-router-dom";
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Blog from './Blog'
import { useState } from 'react'

function App() {

  // const [scrollPos, setScrollPos] = useState(0)

  // const handleScroll = () => {
  //   console.log('scroll')
  // }

  return (
    <div id='root-div'>

        {/* <Navbar /> */}
        {/* <Projects /> */}
        {/* <Experience /> */}
        {/* <Contact /> */}
        {/* <Blog />  */}

      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/home">
          <About />
        </Route>
        <Route exact path="/home">
          <About />
        </Route>
        <Route exact path="/skills">
          {/* <Skills /> */}
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
     </div>
  );
}

export default App;
