import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';
import ReviewSection from '../../ReviewSection';

function GameTLOU() {
  const history = useNavigate()

  return (
    <>
        <div >
            <div className='game-container TLOU' >
                <h1 >The Last Of Us 2</h1>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={()=> history(-1)}>
                  Home <i className='fa-solid fa-home'/>
                  </Button>
            </div>
          </div >

        <div className='cards last'>
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
                      src='/images/The Last of Us™ Part II_20200622092602.jpg'
                      text='Playing as Joel for the last time'
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200622092602.jpg' />

                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200622101049.jpg'
                      text='Snowy mountain tops'
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200622101049.jpg' />

                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200628101939.jpg'
                      text='Wasteland'
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200628101939.jpg' />

                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200707182609.jpg'
                      text='Destruction'
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200707182609.jpg' />
                      
                  </ul>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200707191110.jpg'
                      text='Peace?'
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200707191110.jpg' />
                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200708165856.jpg'
                      text='God I love Joel'
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200708165856.jpg' />
                  </ul>
                  
              </div>
          </div>
        </div>
        
        <Footer/>
    </>
    
  )
}

export default GameTLOU