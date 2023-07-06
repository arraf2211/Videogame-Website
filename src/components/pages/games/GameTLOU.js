import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';

function GameTLOU() {
  const history = useNavigate()

  return (
    <>
        <div >
            <div className='game-container TLOU' >
                <h1 >LAST OF US 2</h1>
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
                      src='/images/The Last of Us™ Part II_20200622092602.jpg'
                      text=''
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200622092602.jpg' />

                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200622101049.jpg'
                      text=''
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200622101049.jpg' />

                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200628101939.jpg'
                      text=''
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200628101939.jpg' />

                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200707182609.jpg'
                      text=''
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200707182609.jpg' />
                      
                  </ul>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200707191110.jpg'
                      text=''
                      label='The Last Of Us 2'
                      path='/image/The Last of Us™ Part II_20200707191110.jpg' />
                      <CardItem 
                      src='/images/The Last of Us™ Part II_20200708165856.jpg'
                      text=''
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