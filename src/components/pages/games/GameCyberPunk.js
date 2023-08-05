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
                header='Review - Story'
                text='Cyberpunk 2077 is about mercenary, V, who after a terrible heist gets implanted with a chip which threatens to overwrite his entire personality and memories of Johnny Sliverhand, and is about the two of them trying to get separated and to save V. The characters you meet along the way are great, such as Johnny Sliverhand who, to put it simply, is a rockstar who hates corporations for what they did to the world and to him, or the reckless but caring nomad Panam, who have so much depth to them making them feel so human and real. The story is action packed with a great pacing and wide range of player choices encouraging multiple playthroughs to try out different paths. The story really stays with you with each choice being meaningful especially the ending which had me conflicted with what to do and how it would affect V’s loved ones, CyberPunk’s story is another great story created by CD Project Red.'/>
                <ReviewSection
                header='Soundtrack'
                text='The soundtrack for cyberpunk is techno, heavy hitting and absolutely amazing to listen to, such as the track used for Sliverhand’s missions which makes you feel like an absolute badass rockstar. The soundtrack is just great and is a must listen.'/>
                <ReviewSection
                header='Gameplay'
                text="With this being a RPG there is a wide arrange of approaches one can take such as being an invisible katana wielding double jumping assassin, or a cocky netrunner who can cause enemies to kill themselves with one glance to a shotgun wielding psycho who can with the assist of his cyber implement slow down time to get right behind of an unexpecting gangster, the possibilities are limitless. Having so much choice of what character build you want, will make you want to play the game again and again. With my 40 hours of game time, I never once felt bored due to the side quests, weapons to find and due to the dream cars which you could obtain and drive around such as the beautiful Porsche 911 Turbo. The only thing which I disliked was the vehicle control, I hated how the driving was due to how bad it felt, they felt more like toy cars than cars of the future yet this still didn't stop me from exploring every nook and cranny to find my next car. The city where this all takes place, Night City is a mesmerising place to drive through showing this ultra capitalistic city with large neon adverts across every skyscraper, but down to the streets is teeming with gangs, crime and corpo’s making it enjoyable to explore and find hidden secrets or powerful weapons. "/>
                <ReviewSection
                header='Graphics'
                text='The game is just beautiful and this is due to how well made Night City is, it really is a pro-Capitalist dystopia and it makes you want to explore it and to get lost in it. '/>
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
                        
                        <CardItem 
                        src='/images/nightCity.JPG'
                        text='Late Night in Night City'
                        label='CyberPunk 2077'
                        path='/image/nightCity.JPG' />
  
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/WithSliverhand.JPG'
                        text='Chilling with SliverHand'
                        label='CyberPunk 2077'
                        path='/image/WithSliverhand.JPG' />
                    </ul>
                    
                </div>
            </div>
          </div>
          
          <Footer/>
      </>
    )
}

export default GameCyberPunk