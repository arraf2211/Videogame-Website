import React, {useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import '../components/ReviewSection.css'

function ReviewSection(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
        
            <motion.li className='review_cards' ref={ref}
                  variants={{
                      hidden: {opacity: 0, x:-100},
                      visible: {opacity:1, x:0}
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration:0.5, delay:0.25}}>

                <h2 className='review_card_header'>
                    {props.header}
                </h2>
                <h4 className='review_card_text'>
                    {props.text}
                </h4>
            </motion.li>
        
    </>
  )
}

export default ReviewSection