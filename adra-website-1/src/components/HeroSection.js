import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function Herosection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>WELCOME TO ADRA ENTERPRISE</h1>
            <p>What are you looking for?</p>
            <div className="hero-btns">
                <Button classname='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    REACH OUT TO US
                </Button>
                <Button classname='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={(e) => {e.preventDefault(); window.location.href="https://www.youtube.com/channel/UC7DfKrNRbLV7-vvmEO1Lk_A"}} >
                    WATCH VIDEOS <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Herosection
