import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';

function GameCyberPunk() {
    const history = useNavigate()
    return (
      <>
          <div >
              <div className='game-container Cyber' >
                  <h1 >CyberPunk 2077</h1>
                  <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={()=> history(-1)}>
                    Home <i className='fa-solid fa-home'/>
                    </Button>
              </div>
            </div >
  
          <div className='cards Cyber'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/Samurai Rock.jpg'
                        text='Rockstar'
                        label='CyberPunk 2077'
                        path='/image/Samurai Rock.jpg' />
  
                        <CardItem 
                        src='/images/V_on_tank.jpg'
                        text='Tank on Tank'
                        label='CyberPunk 2077'
                        path='/image/V_on_tank.jpg' />
  
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/nightCity.jpg'
                        text='Late Night in Night City'
                        label='CyberPunk 2077'
                        path='/image/nightCity.jpg' />
                    </ul>
                    
                </div>
            </div>
          </div>
          
          <Footer/>
      </>
    )
}

export default GameCyberPunk