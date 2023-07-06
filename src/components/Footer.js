import React from 'react'
import {Button} from './Button' 
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join yippie
            </p>
            <p className='footer-subscription-text'>
                Can unsubscribe
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>
                        Subscribe here my friend
                    </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/sign-up'>Links</Link>
                    <Link to='/sign-up'>Contacts</Link>
                    <Link to='/sign-up'>Legal</Link>
                    <Link to='/sign-up'>No</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Home <i className='fa-solid fa-house'></i>
                    </Link>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Footer