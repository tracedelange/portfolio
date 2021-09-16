import '../App.css';
import Navbar from './Navbar'
import { Route, Switch, Redirect, Link } from "react-router-dom";
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'

import logo from '../assets/delange-dev.png'
import steamingLogo from '../assets/dd-steaming.gif'


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
      <Link to='/home'>
        <img id='logo' src={steamingLogo} alt='logo cup of coffee' />

      </Link>
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
