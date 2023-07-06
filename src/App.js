import React from 'react';
//import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import './App.css'; 
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';
import GameTLOU from './components/pages/games/GameTLOU';
import ImagePage from './components/pages/ImagePage';
import FullImage from './components/pages/FullImage';
import GameGhost from './components/pages/games/GameGhost';
import GameElden from './components/pages/games/GameElden';


function App() {
  return (
    <>
    <Router>
      
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' Component={Services}/>
        <Route path='/projects' Component={Projects}/>
        <Route path='/sign-up'  Component={SignUp}/>
        <Route path='/gameTheLastOfUs2' Component={GameTLOU}/>
        <Route path='gameGhostOfTsumia' Component={GameGhost}/>
        <Route path='gameEldenRing' Component={GameElden}/>
        <Route path='image/:imageID' Component={ImagePage}/>
        <Route path='image' Component={ImagePage}/>
        <Route path='fullImage/:imageID' Component={FullImage}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
