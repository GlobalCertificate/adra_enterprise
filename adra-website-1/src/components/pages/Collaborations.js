import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

function Collaborations() {
  return (
      <>
    <div className='cards'>
      <h1>Our Collaborations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-nus.jpg' 
              text='National University of Singapore'
              label='Singapore'
              path='/services'
            />
            <CardItem
              src='images/img-pgs1.png'
              text='Pinegrove School'
              label='India'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-irc1.png'
              text='International Researchers Club'
              label='Singapore'
              path='/products'
            />
            <CardItem
              src='images/img-homeflic.png'
              text='Homeflic Wegrow'
              label='India'
              path='/services'
            />
            <CardItem
              src='images/img-finolearn.png'
              text='Finolearn'
              label='India'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-ssis.png' 
              text='Shining Star International School'
              label='United Arab Emirates'
              path='/services'
            />
            <CardItem
              src='images/img-srcas.png'
              text='Sri Ramakrishna College of Arts and Science'
              label='India'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-swap.png'
              text='SWAP Inc'
              label='India'
              path='/products'
            />
            <CardItem
              src='images/img-steps.png'
              text='STEPS - NUS'
              label='Singapore'
              path='/services'
            />
            <CardItem
              src='images/img-hangar.png'
              text='The Hangar - NUS Enterprise'
              label='Singapore'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Collaborations;