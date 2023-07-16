import React from 'react'
import {Button} from './Button' 
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Learn more about me</h2>
                    <Link to='https://www.linkedin.com/in/arraf-rahman/'>My Linkedin <i class="fa-brands fa-linkedin fa-fw"></i></Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer