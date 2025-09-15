import React, { useState } from 'react';

const Contact = () => {
  
  return (
    <div className='flex justify-center'>
      

     <form action="https://formspree.io/f/meolpgno" method='POST' id='form'>
  <h2>Get in touch with us!</h2>

  <div class="form-group">
    <label for="name">Name <span>*</span></label>
    <input type="text" name="name" id="name" required />
  </div>

  <div class="form-group">
    <label for="phone">Contact Number <span>*</span></label>
    <input type="tel" name="phone" id="phone"  required/>
  </div>

  <div class="form-group">
    <label for="email">E-mail <span></span></label>
   <input type="email" name="email" id="email" />
  </div>

  

  <div class="form-group">
    <label for="message">Message <span>*</span></label>
    <textarea id="message" placeholder="Enter your message" name="message" required></textarea>
  </div>

  <button type="submit" class="form-btn">Submit</button>
</form>






    </div>


  )
}

export default Contact