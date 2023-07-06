import React from 'react'
import './GameHeader.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function GameHeader(props) {
    return(
        <>
          <div >
            <div className='game-container TLOU' >
                <h1 >LAST OF US 2</h1>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' >
                  Home <i className='fa-solid fa-home'/>
                  <Link to={"/"}></Link>
                  </Button>
            </div>
          </div >
        </>
      )
}

export default GameHeader;