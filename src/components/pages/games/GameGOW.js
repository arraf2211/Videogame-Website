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
                    header='Review - Story'
                    text=" God of War Ragnarök's story is really compelling and follows a few years after the events of the last game and shows the consequences and how Kratos and Aretus battle with their own fates to try and save the Realms. I loved the twists and turns and the renditions of famous characters that it introduced such as Thor and Odin. This pair aren't like their Marvel counterparts, Thor is shown as this massive drunk war machine and Odin is
                    … ahh I’ll let you find out for yourself. The main man himself Kratos is once again an amazing protagonist to play as, and players can enjoy witnessing his continued battle to overcome his violent past. The story however has some pacing issues being a 25 hour long game; there were some parts of the game which were jarring to get through (anyone who has played the game knows exactly which part I'm talking about…) however, after that, the pacing  picks up again and it concludes amazingly.
                                         "/>
                    <ReviewSection
                    header='Soundtrack'
                    text="I'm not much of a music person but my god Bear McCreary has created another masterpiece; the soundtrack is amazing once again, no skips on any of the songs.
                    "/>
                    <ReviewSection
                    header='Gameplay'
                    text="God of War (2018) was a good game with decent combat but after awhile it had gotten boring and repetitive with the same enemies and boss fights (god I hated fighting those trolls as boss fights) however with Ragnarok I am glad to say that the combat was vastly improved upon with much more faster paced combat and with a great number of enemies to unleash Kratos’ rage upon. The boss fights here may get a bit tiring especially post end, as the boss fights are gonna be of different variants of bosses you’ve already faced but it’s still great and rewarding to do. There’s still a few puzzles to do such as the Normir chests and environmental puzzles, whilst these are fun to do especially the Normir chests, the environmental puzzles can be annoying to do mainly due to Aretus hinting to you on what you have to do every 5 minutes, I really wish there was an option to get rid of hints for those puzzles. With the realms you get to travel to there is a great amount to explore and quests to do in them such as Vanaheim and Midgard which is just packed to the brim with quests and secrets to find. But this isn't the same with all Realms, since some are only for the main story and some are very small in size with only a few quests to do in them. Exploring is fun to do and I loved finding new side quests or new pieces of armour to equip on Kratos but the only issue I had with exploring was the compass on the HUD which sometimes made me extremely lost and often felt like it was fighting with me but this had only happened on a small amount of occasions. 
                    "/>
                    <ReviewSection
                    header='Graphics'
                    text="Beautiful, just beautiful and stunning. The realms that you travel to in this game are vast with each one different to one another, from Jungles of Vanaheim to the snow covered Midgard, each realm is beautiful, trust me when I say this that photo mode will be used a lot in some of these locations. "/>
                    <ReviewSection
                    header='Score'
                    text='8.5/10'/>
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