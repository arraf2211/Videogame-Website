import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';
import ReviewSection from '../../ReviewSection';

function GameElden() {
  const history = useNavigate()
  return (
    <>
        <div >
            <div className='game-container Elden' >
                <h1 >ELDEN RING</h1>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={()=> history(-1)}>
                  Home <i className='fa-solid fa-home'/>
                  
                  </Button>
            </div>
          </div >

        <div className='cards elden'>
          <ul className='review__CardLists'>
                    <ReviewSection
                    header='Review'
                    text='Coming Soon ....'/>
                    <ReviewSection
                    header='Score'
                    text='Will be given once game is finished'/>
              </ul>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/Eldenringbow.png'
                      text='Bowing to the old gods'
                      label='Elden Ring'
                      path='/image/Eldenringbow.png' />    
                      <CardItem 
                      src='/images/EldenRingAcademy.JPG'
                      text='Raya Lucaria Academy'
                      label='Elden Ring'
                      path='/image/EldenRingAcademy.JPG' /> 
                      <CardItem 
                      src='/images/EldenRingCaelid.JPG'
                      text='Caelid'
                      label='Elden Ring'
                      path='/image/EldenRingCaelid.JPG' />   
                      <CardItem 
                      src='/images/EldenRingScenary.JPG'
                      text='Liurnia'
                      label='Elden Ring'
                      path='/image/EldenRingScenary.JPG' />              
                  </ul>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/CaelidHead.jpeg'
                      text='Caelids Head'
                      label='Elden Ring'
                      path='/image/CaelidHead.jpeg' />  
                      <CardItem 
                      src='/images/EternalCity.jpeg'
                      text='Nokorn The Eternal City'
                      label='Elden Ring'
                      path='/image/EternalCity.jpeg' />
                      <CardItem 
                      src='/images/TheCrator.jpeg'
                      text='Crator city'
                      label='Elden Ring'
                      path='/image/TheCrator.jpeg' />                   
                  </ul>
                  <ul className='cards__items'>
                    <CardItem 
                        src='/images/ErdTreesLight.JPG'
                        text='Erd Trees Light shines everywhere'
                        label='Elden Ring'
                        path='/image/ErdTreesLight.JPG' />                
                  </ul>
              </div>
          </div>
        </div>
        
        <Footer/>
    </>
  )
}

export default GameElden