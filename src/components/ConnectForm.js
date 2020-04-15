// funcitonal based component
import React from 'react';
import Title from './Title';
import contactLogo from '../images/aura-children-logov2.png';

export default function Connect({connect}) {
  return (
    <section className="connect">
      <Title title='Stay Connected'/>
      <div className="form-group">
        <div id="connect-form">
          {/* enter full name */}
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="connect-name"/>
          {/* enter email */}
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="connect-email"/>
          {/* enter message */}
          <label htmlFor="message">Your Message</label>
          <textarea rows="8" cols="40" name="comment" form="userform" id="connect-message">Enter message here</textarea>
          <h6><a className="btn-primary" href="#">Submit</a></h6>
        </div>

        <div className="aura-connect">
        <img src = {contactLogo} alt="Aura Children" width="200px"/>
        <div className="connect-info">
        <p>p: (403) 287-2663 (AURAONE)</p>
        <p>a: 123 Mother Gaia Way</p>
        <p>e: aurachildren@gmail.com</p>
        </div>
        </div>
      </div>
    </section>
  );
}

// note: The submit form does not actually work. Using a button as a placeholder for now.