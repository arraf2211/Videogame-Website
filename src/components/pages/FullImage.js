import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../ImagePageStyle.css'
import NavBar from '../NavBar'
import { Button } from '../Button'

const newTab=url=>{
    window.open(url)
}

function FullImage() {
    const params = useParams()
  return (
    <>
        
        <div className='fullPage'>
            <img className='full' src={`/images/${params.imageID}`}></img>
            
        </div>
    </>
    
  )
}

export default FullImage