import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';
import ReviewSection from '../../ReviewSection';

function GameGOW() {
    const history = useNavigate()
    return (
      <>
          <div >
              <div className='game-container GOW' >
                  <h1 >God Of War Ragnarok</h1>
                  <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={()=> history(-1)}>
                    Home <i className='fa-solid fa-home'/>
                    </Button>
              </div>
            </div >
  
          <div className='cards GOW'>
            <ul className='review__CardLists'>
                    <ReviewSection
                    header='Review'
                    text='Coming Soon ...'/>
                    <ReviewSection
                    header='Score'
                    text='9/10'/>
            </ul>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/Asgard.JPG'
                        text='Asgard'
                        label='God Of War Ragnarok'
                        path='/image/Asgard.JPG' />
  
                        <CardItem 
                        src='/images/Cosmic.JPG'
                        text='Primal Realm'
                        label='God Of War Ragnarok'
                        path='/image/Cosmic.JPG' />
  
                        <CardItem 
                        src='/images/Destiny_of_Boy.JPG'
                        text='Destiny'
                        label='God Of War Ragnarok'
                        path='/image/Destiny_of_Boy.JPG' />
                        
                        <CardItem 
                        src='/images/Dogs.JPG'
                        text='Dogs Of War'
                        label='God Of War Ragnarok'
                        path='/image/Dogs.JPG' />
  
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/JellyFish.JPG'
                        text='Jelly Fish'
                        label='God Of War Ragnarok'
                        path='/image/JellyFish.JPG' />
  
                        <CardItem 
                        src='/images/Mediation.JPG'
                        text='Me'
                        label='God Of War Ragnarok'
                        path='/image/Mediation.JPG' />
                        
                        <CardItem 
                        src='/images/Sisters_of_fate.JPG'
                        text='Fate Weavers'
                        label='God Of War Ragnarok'
                        path='/image/Sisters_of_fate.JPG' />
                        
                    </ul>

                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/WithBear.JPG'
                        text='Bear with me'
                        label='God Of War Ragnarok'
                        path='/image/WithBear.JPG' />
  
                        <CardItem 
                        src='/images/Yggdrasil.JPG'
                        text='Yggdrasil'
                        label='God Of War Ragnarok'
                        path='/image/Yggdrasil.JPG' />
                    </ul>
                </div>
            </div>
          </div>
          
          <Footer/>
      </>
    )
}

export default GameGOW