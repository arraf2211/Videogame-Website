import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import Footer from '../Footer'
import '../ImagePageStyle.css'
import { Button } from '../Button'
import { Link } from 'react-router-dom';

const newTab=url=>{
    window.open(url)
}

function ImagePage() {
  const history = useNavigate()
  const params = useParams() 
  
  return (
    <>
        <NavBar/>
        <div className='image-container'>
            <img src={`/images/${params.imageID}`}>
            </img>
            <div className='btn-container'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={()=> newTab(`/fullImage/${params.imageID}`)}>
                    View image in new tab
                    <Link to={`/fullImage/${params.imageID}`}></Link>
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={()=>downloadImg(`/images/${params.imageID}`)}>
                    Download image
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={()=> history(-1)}>
                    Back to Game Page
                </Button>
            </div>
            
        </div>
        
        <Footer/>
    </>
  )
}

export default ImagePage



function downloadImg(url){
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download',url);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}

