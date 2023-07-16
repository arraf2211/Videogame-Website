import React from 'react'
import { useParams } from 'react-router-dom'
import '../ImagePageStyle.css'
import ThreeDObject from '../ThreeDObject'

const newTab=url=>{
    window.open(url)
}

function FullImage() {
    const params = useParams()
  return (
    <>
        
        <div className='fullPage' >
          <img className='full' src={`/images/${params.imageID}`} ></img>
          <ThreeDObject />
          

        </div>
    </>
    
  )
}

export default FullImage