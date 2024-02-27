import React, { useState } from "react";


const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  logic for submitting the email
    console.log('Email submitted:', email);
    // Reset the email state after submission
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <h2>Sign up and get exclusive special deals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
          required
          className="email-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default NewsLetter;
