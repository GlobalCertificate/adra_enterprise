import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Products and Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg' 
              text='Website Design: Great websites tailored just for you!'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Graphic Design: Bringing you the most creative designs in the market!'
              label='Services'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Al-Fayez Sports (E-Sports): Striving to bring the best e-sport events to you!'
              label='Events'
              path='/products'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Software Development: Got software development needs, we are here to help you out!'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Global Certificates: An online certificate generation and distributon platform offering e-verifiable blockchain based certificates'
              label='Product'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;