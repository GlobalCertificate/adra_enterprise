import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          For any queries, feel free to reach out to us!
        </p>
        <p className='footer-subscription-text'>
          We are available at contact@adraenterprise.com.
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/contactus'>Contact Us</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/team'>Team</Link>
            <Link to='/termsofservice'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Know More</h2>
            <Link to='/collaborations'>Collaborations</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Offices</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Team Videos</Link>
            <Link to='/'>Product Videos</Link>
            <Link to={{ pathname: "https://www.youtube.com/channel/UCpt7AgNezCS4GXiFu6U_TYA"}} target='_blank'>E-Sports Videos</Link>
            <Link to='/'>Influencer Videos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.instagram.com/globalcert_/"}} target='_blank'>Instagram</Link>
            <Link to={{ pathname: 'https://www.facebook.com/globalcertificate'}} target='_blank'>Facebook</Link>
            <Link to={{ pathname: 'https://www.youtube.com/channel/UC7DfKrNRbLV7-vvmEO1Lk_A'}} target='_blank'>Youtube</Link>
            <Link to={{ pathname: 'https://twitter.com/GlobalCert2'}} target='_blank'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fab fa-adversal' />
              ADRA Enterprise
            </Link>
          </div>
          <small class='website-rights'>ADRA Enterprise © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/globalcertificate" }} 
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/globalcert_/" }} 
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to= {{ pathname: "https://www.youtube.com/channel/UC7DfKrNRbLV7-vvmEO1Lk_A" }} 
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/GlobalCert2" }} 
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link LinkedIn'
              to={{ pathname: "https://www.linkedin.com/company/globalcert/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;