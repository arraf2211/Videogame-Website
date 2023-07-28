import React from 'react'
import CardItem from '../../CardItem'
import Footer from '../../Footer'
import '../../GameHeader.css';
import { Button } from '../../Button';
import { useNavigate } from 'react-router-dom';
import ReviewSection from '../../ReviewSection';

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

        <div className='cards ghost'>
          <ul className='review__CardLists'>
                    <ReviewSection
                    header='Review'
                    text='Coming Soon ...'/>
                    <ReviewSection
                    header='Score'
                    text='7.5/10'/>
              </ul>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/GhostofTsushima_20201125173308.jpg'
                      text='Path to destiny'
                      label='Ghost Of Tsusima'
                      path='/image/GhostofTsushima_20201125173308.jpg' />

                      <CardItem 
                      src='/images/GhostofTsushima.jpg'
                      text='Wind'
                      label='Ghost Of Tsusima'
                      path='/image/GhostofTsushima.jpg' />

                      
                      <CardItem 
                      src='/images/GhostofTsushima_20201206004209.jpg'
                      text='Sunset'
                      label='Ghost Of Tsusima'
                      path='/image/GhostofTsushima_20201206004209.jpg' />

                      
                      
                  </ul>
                  <ul className='cards__items'>
                      <CardItem 
                      src='/images/Ghost of Tsushima_20210103134652.jpg'
                      text='Riding with unc'
                      label='Ghost Of Tsusima'
                      path='/image/Ghost of Tsushima_20210103134652.jpg' />

                      <CardItem 
                      src='/images/Ghost of Tsushima_20210107122314.jpg'
                      text='The Ghost'
                      label='Ghost Of Tsusima'
                      path='/image/Ghost of Tsushima_20210107122314.jpg' />
                      
                  </ul>
              </div>
          </div>
        </div>
        
        <Footer/>
    </>
  )
}

export default GameGhost