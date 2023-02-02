import About from './About';
import './App.css';
import Contact from './Contact';
import './Profile'
import Profile from './Profile';
import Projects from './Projects';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
      <div className='banner'>

        <h1>Personal portfolio</h1>

        <div className='navbar'>
          <NavLink to='/'><h4>Home</h4></NavLink>
          <NavLink to='/about'><h4>About</h4></NavLink>
          <NavLink to='/projects'><h4>Projects</h4></NavLink>
          <NavLink to='/contact'><h4>Contact</h4></NavLink>
        </div>

      </div>
        <Routes>
          <Route exact path='/' element={<Profile />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path='/contact' element={ <Contact />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
