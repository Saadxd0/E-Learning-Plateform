import React, { useState } from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
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
    // In a real app, you would send this data to your backend
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
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with any questions or inquiries.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Our Location</h3>
                <p>123 Education Street, Learning City, ED 12345</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Phone Number</h3>
                <p>+1 234 567 8900</p>
                <p>Monday-Friday, 9AM-5PM EST</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>info@educonnect.com</p>
                <p>support@educonnect.com</p>
              </div>
            </div>
          </div>
          
          <div className="social-connect">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
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
              <label htmlFor="email">Email Address</label>
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
      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How do I enroll in a course?</h3>
            <p>Simply browse our courses, select the one you're interested in, and click the "Enroll Now" button. You'll be guided through the registration and payment process.</p>
          </div>
          
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers. For corporate training, we also offer invoice payment options.</p>
          </div>
          
          <div className="faq-item">
            <h3>Are there any prerequisites for courses?</h3>
            <p>Prerequisites vary by course. Each course description includes information about any required prior knowledge or skills.</p>
          </div>
          
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>Yes, we offer a 30-day money-back guarantee for most courses. Please refer to our refund policy for specific details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage; 