import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';


function Products (){
    return (
        <>
        <h1 className='products'>PRODUCTS</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items' >
            
            <CardItem 
              src='images/img-14.jpg'
              text='Global Certificates: An online certificate generation and distributon platform offering e-verifiable blockchain based certificates.'
              label='Products'
              path="http://www.globalcert.cloud/"
            />
            
            
            <CardItem
              src='images/img-13.jpg'
              text='Al-Fayez Sports (E-Sports): Striving to bring the best e-sport events to you! We host multiple E-Sports events in different countries in collaboration with different organizations and brands!'
              label='Products/Events'
              path='http://www.alfayezsports.com/'
            />
            
            
            <CardItem
              src='images/img-15.jpg'
              text='Corporate Initiation Program (CIP): A unique 4-week training program for students to learn about the various career opprtunities, select their career path and receive specialised training it while getting the chance to experience corporate culture first hand!'
              path='https://uvents.nus.edu.sg/homepage/events'
            />
          </ul>
          
          </div>
        <h2>Price Quotations</h2>
        <p>Please contact us for any queries or price quotations for the above mentioned services at collaborations@globalcert.cloud</p>
        </div>
        <Footer />
        </>
    )
}

export default Products;