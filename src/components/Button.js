import React from 'react';
import './Button.css';
import { motion, useInView, useAnimation } from 'framer-motion'

const STYLES = ['btn--primary' , 'btn--outline' , 'btn--arrow--left' , 'btn--arrow--right'];
const SIZES = ['btn--medium' , 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    return(
        <div  className='btn-mobile' >
            <motion.button whileTap={{ scale: 0.8}}
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                    {children}
            </motion.button>
        </div>
    )
};