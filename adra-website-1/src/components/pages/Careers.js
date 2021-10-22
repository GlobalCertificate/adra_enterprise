import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function Careers (){
    return (
        <>
        <h1 className='careers'>CAREERS</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Consider your self to be a good web-developer? Send us an email with your CV at hr@globalcert.cloud'
              label='Web Development Jobs/ Internships'
              path='http://www.globalcert.cloud/'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Have experience in esports or event management? Send us an email with your CV at hr@globalcert.cloud'
              label='E-sports/ Event Management Jobs/ Internships'
              path='http://www.alfayezsports.com/'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Consider yourself creative and interested in working with us? Send us your CV at contact@adraenterprise.com'
              label='Graphic Designer Jobs/ Internships'
              path='/contactus'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Do you have what it takes to be a software developer? Send us your CV at contact@adraenterprise.com if you think so.'
              label='Software Developer Jobs/ Internships'
              path='http://www.globalcert.cloud/'
            />
            <CardItem
              src='images/img-team.jpg'
              text='Want to be a part of our Business Management team? Send us your CV at hr@globalcert.cloud'
              label='Business Development Jobs/ Internships'
              path='http://www.globalcert.cloud/'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Want to work with us as an HR or CRM? Send us your CV at hr@globalcert.cloud'
              label='HR and CRM Jobs/ Internships'
              path='/contactus'
            />
          </ul>
          </div>
        
        </div>
        <Footer />
        </>
    )
}

export default Careers;