import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';

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

        <div className='cards'>
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
                  </ul>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/EldenRingScenary.JPG'
                      text='Liurnia'
                      label='Elden Ring'
                      path='/image/EldenRingScenary.JPG' />                   
                  </ul>
              </div>
          </div>
        </div>
        
        <Footer/>
    </>
  )
}

export default GameElden