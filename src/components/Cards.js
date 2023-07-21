import React, {useEffect, useRef} from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {

  return (
    <div  className='cards'>
        <h1>Pictures taken from the Games below</h1>
        <div  className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='/images/GhostofTsushima.jpg'
                    text='Ghost of Tsushima'
                    label='Ghost of Tsushima'
                    path='/gameGhostOfTsumia' />
                    <CardItem 
                    src='/images/TheLastofUsPartII_20200624175117.jpg'
                    text='The Last Of Us 2'
                    label='The Last Of Us 2'
                    path='/gameTheLastOfUs2' />
                    <CardItem 
                    src='/images/Eldenringbow.png'
                    text='Elden Ring'
                    label='Elden Ring'
                    path='/gameEldenRing' />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                    src='/images/Dogs.JPG'
                    text='God Of War'
                    label='God Of War'
                    path='/gameGodOfWar' />
                    <CardItem 
                    src='/images/V_on_tank.JPG'
                    text='CyberPunk 2077'
                    label='CyberPunk 2077'
                    path='/gameCyberPunk' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards