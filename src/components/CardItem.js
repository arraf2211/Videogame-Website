import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useAnimation } from 'framer-motion'

function CardItem(props) {
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
        

            <motion.li className='cards__item' ref={ref}
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity:1, y:0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay:0.25}}
                
                whileTap={{scale:0.8}}>

                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='default' className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </motion.li>
        
    </>
  )
}

export default CardItem