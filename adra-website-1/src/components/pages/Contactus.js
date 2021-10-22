import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import './Contactus.css';
import {Link} from 'react-router-dom';

function Contactus (){

    

    return (
        <>
        <h1 className='contactus'>CONTACT US</h1>
        <div className='text-container'>
            <p>You can fill the form by clicking on the link below to contact us</p>
            <Link to={{ pathname: "https://gcert.comp.nus.edu.sg/code/certificate/about.html"}} target='_blank'>
            <div className="text-btns">
            
                <Button classname='btns' buttonStyle='btn--grey' buttonSize='btn--large' type="button" onClick={(e) => {e.preventDefault(); window.location.href="https://gcert.comp.nus.edu.sg/code/certificate/about.html"}} >
                    CONTACT US FORM
                </Button>  
                
            </div>
            </Link>

        </div>
        <Footer />
        </>
    )
}

export default Contactus;


