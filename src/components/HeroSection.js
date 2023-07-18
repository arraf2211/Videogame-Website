import React , {useEffect, useRef} from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { motion, useInView, useAnimation } from 'framer-motion'


let slideIndex = 0;

const slides = [
  {url:"url('images/GhostofTsushima_20201125173308.jpg') center center/cover no-repeat" , index:0},
  {url:"url('images/EldenRingCaelid.JPG') center center/cover no-repeat", index:1},
  {url:"url('images/nightCity.jpg') center center/cover no-repeat" , index:2},
  {url:"url('images/WithBear.jpg') center center/cover no-repeat" , index:3},
  {url:"url('images/TheLastofUsPartII_20200624175117.jpg') center center/cover no-repeat" , index:4},
];

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      
        <div className='hero-container'>
            <motion.h1 ref={ref}
              variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity:1, y:0}
              }}
              initial="hidden"
              animate={mainControls}
              transition={{duration:0.5, ease:"easeIn"}}>  
              
              WELCOME</motion.h1>
              
              <Button Button className='btns' buttonStyle='btn--arrow--left' buttonSize='btn--large' onClick={prevImage}>
                <i className='fa-solid fa-arrow-left'/>
              </Button>
              <Button className='btns' buttonStyle='btn--arrow--right' buttonSize='btn--large' onClick={nextImage}>
                    <i className='fa-solid fa-arrow-right'/>
              </Button>
              
        </div>
    </div>
  );
}

function nextImage(){
  const elem = document.querySelector('.hero-container');
  const newIndex = slideIndex === slides.length-1 ? 0 : ++slideIndex;
  slideIndex = newIndex;
  elem.style.background = slides[newIndex].url;
  elem.style.display = "flex";
  
}

function prevImage(){
  const elem = document.querySelector('.hero-container');
  const newIndex = slideIndex === 0 ? slides.length-1 : --slideIndex;  
  slideIndex = newIndex;
  elem.style.background = slides[newIndex].url;
  elem.style.display = "flex";
  
}

export default HeroSection;