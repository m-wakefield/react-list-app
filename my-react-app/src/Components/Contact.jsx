import { useState } from 'react';
import Navbar from './Navbar';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted contact form:', formData);
    setSubmitted(true);
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        <h1>📨 Contact Us</h1>
        {submitted && <p style={{ color: 'green' }}>Thanks for your message!</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows="4"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
