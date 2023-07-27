import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';
import ReviewSection from '../../ReviewSection';

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
            <ul className='review__CardLists'>
                <ReviewSection
                header='Review'
                text='Had fun playing with this game, the combat and the story was great as well. 
                The characters were exceptional as well and felt real'/>
                <ReviewSection
                header='Story'
                text='Had fun playing with this game, the combat and the story was great as well. 
                The characters were exceptional as well and felt real'/>
                <ReviewSection
                header='Combat'
                text='Had fun playing with this game, the combat and the story was great as well. 
                The characters were exceptional as well and felt real'/>
                <ReviewSection
                header='Score'
                text='9/10'/>
                </ul>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/Samurai Rock.JPG'
                        text='Rockstar'
                        label='CyberPunk 2077'
                        path='/image/Samurai Rock.JPG' />
  
                        <CardItem 
                        src='/images/V_on_tank.JPG'
                        text='Tank on Tank'
                        label='CyberPunk 2077'
                        path='/image/V_on_tank.JPG' />
  
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/nightCity.JPG'
                        text='Late Night in Night City'
                        label='CyberPunk 2077'
                        path='/image/nightCity.JPG' />
                    </ul>
                    
                </div>
            </div>
          </div>
          
          <Footer/>
      </>
    )
}

export default GameCyberPunk