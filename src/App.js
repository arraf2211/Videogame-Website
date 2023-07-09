import { useEffect } from 'react';
import { BrowserRouter as Router, Routes ,Route, useLocation} from 'react-router-dom';
import './App.css'; 
import Home from './components/pages/Home';
import GameTLOU from './components/pages/games/GameTLOU';
import ImagePage from './components/pages/ImagePage';
import FullImage from './components/pages/FullImage';
import GameGhost from './components/pages/games/GameGhost';
import GameElden from './components/pages/games/GameElden';


function App() {
  const {pathname} = useLocation();
  useEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname]);

  return (
    
    
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/gameTheLastOfUs2' Component={GameTLOU}/>
        <Route path='gameGhostOfTsumia' Component={GameGhost}/>
        <Route path='gameEldenRing' Component={GameElden}/>
        <Route path='image/:imageID' Component={ImagePage}/>
        <Route path='image' Component={ImagePage}/>
        <Route path='fullImage/:imageID' Component={FullImage}/>
      </Routes>
  );
}

export default App;
