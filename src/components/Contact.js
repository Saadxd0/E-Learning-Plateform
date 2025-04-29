import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Have questions or need assistance? We're here to help!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h3>Our Location</h3>
              <p>123 Education Street, Learning City, ED 12345</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-details">
              <h3>Call Us</h3>
              <p>+1 234 567 8900</p>
              <p>+1 234 567 8901</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-details">
              <h3>Email Us</h3>
              <p>info@educonnect.com</p>
              <p>support@educonnect.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">🕒</div>
            <div className="info-details">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Weekend: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 