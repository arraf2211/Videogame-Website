import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';

function GameGhost() {
  const history = useNavigate()
  return (
    <>
        <div >
            <div className='game-container Ghost' >
                <h1 >Ghost of Tsushima</h1>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={()=> history(-1)}>
                  Home <i className='fa-solid fa-home'/>
                  </Button>
            </div>
          </div >

        <div className='cards'>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/GhostofTsushima_20201125173308.jpg'
                      text=''
                      label='Ghost Of Tsusima'
                      path='/image/GhostofTsushima_20201125173308.jpg' />

                      <CardItem 
                      src='/images/GhostofTsushima_20201126181141.jpg'
                      text=''
                      label='Ghost Of Tsusima'
                      path='/image/GhostofTsushima_20201126181141.jpg' />

                      <CardItem 
                      src='/images/GhostofTsushima_20201206004209.jpg'
                      text=''
                      label='Ghost Of Tsusima'
                      path='/image/GhostofTsushima_20201206004209.jpg' />

                      <CardItem 
                      src='/images/GhostofTsushima.jpg'
                      text=''
                      label='Ghost Of Tsusima'
                      path='/image/GhostofTsushima.jpg' />
                      
                  </ul>
              </div>
          </div>
        </div>
        
        <Footer/>
    </>
  )
}

export default GameGhost