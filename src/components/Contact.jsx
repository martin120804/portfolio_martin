import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <p>Feel free to reach out to me through any of the following:</p>
        <div className="contact-details">
          <p><strong>Email:</strong> <a href="mailto:martinryangaray08@gmail.com">martinryangaray08@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+639404148852">09945198701</a></p>
          <p><strong>Social:</strong></p>
          <div className="social-links">
            <a href="https://www.facebook.com/martinryan.garay.1?mibextid=ZbWKwL">
              <img src="/images/facebook.png"alt='FACEBOOK'/>
            </a>
            <a href="https://github.com/">
              <img src="/images/github.png" alt='GITHUB' />
            </a>
            <a href="https://www.instagram.com/martin_ryan_g/">
              <img src="/images/instagram.png" alt='INSTA'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
