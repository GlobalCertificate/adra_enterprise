import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';



function Services (){
    return (
        <>
        <h1 className='services'>SERVICES</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Website Design: Great websites tailored just for you, Our team strives to cater to your website development needs by working with various tech-stacks right from REACT based sites to the simple HTML and CSS websites.'
              label='Services'
              path='/contactus'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Software Development: Got software development needs, we are here to help you out! Our team is ever-ready to take on new challenges and build the right solutions just how you like them.'
              label='Services'
              path='/contactus'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Graphic Design: Bringing you the most creative designs in the market! With a group of highly creative individuals we are sure that your deisgn needs can be met nu our team.'
              label='Services'
              path='/contactus'
            />
          </ul>
          </div>
        <h2>Price Quotations</h2>
        <p>Please contact us for any queries or price quotations for the above mentioned services at contact@adraenterprise.com</p>
        </div>
        <Footer />
        </>
    )
}

export default Services;