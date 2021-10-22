import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function Team (){
    return (
        <>
        <h1 className='team'>CORE TEAM</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-aditya.jpg'
              text='Co-Founder and President - Business Management'
              label='Aditya Ranjan'
              path='/'
            />
            <CardItem
              src='images/img-durvesh1.jpg'
              text='Co-Founder and President - Technical Operations'
              label='Durvesh Deshmukh'
              path='/'
            />
            <CardItem
              src='images/img-anand1.jpg'
              text='Co-Founder and Advisor'
              label='Dr. Anand Bhojan'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-francis1.jpg'
              text='Advisor'
              label='Dr. Francis Yeoh'
              path='/'
            />
            <CardItem
              src='images/img-alex.jpg'
              text='Advisor'
              label='Dr. Alex Siow'
              path='/'
            />
            <CardItem
              src='images/img-guan1.jpg'
              text='Advisor'
              label='Dr. Guan Hong Tan'
              path='/'
            />
          </ul>
          </div>
        <h2>Principal Team Members</h2>
        <p>The above members comprise of the core team of ADRA Enterprise</p>
        </div>
        <Footer />
        </>
    )
}

export default Team;