import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    setSubmitted(true);
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    });
  }

  return (
    <div className="contact-page todo-list">
      <h2>Contact Us</h2>
      {submitted && <p style={{ color: 'green' }}>Thanks for your message!</p>}
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Your First Name"
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Your Last Name"
          required
        />
       <>
  <Navbar />
  <div className="app-container">
    ...your page content
  </div>
</>



        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

<Link to="/">← Back to To-Do List</Link>

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

