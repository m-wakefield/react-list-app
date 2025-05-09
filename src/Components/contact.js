import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
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
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="contact-page todo-list">
      <h2>Contact Us</h2>
      {submitted && <p style={{ color: 'green' }}>Thanks for your message!</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

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

