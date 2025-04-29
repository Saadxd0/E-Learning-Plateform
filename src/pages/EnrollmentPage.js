import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../styles/EnrollmentPage.css';

// Sample courses data - in a real app, this would come from an API or context
import { coursesData } from '../data/coursesData';

function EnrollmentPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: '',
    promoCode: ''
  });
  const [errors, setErrors] = useState({});
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  
  useEffect(() => {
    // Find the course with the matching ID
    const foundCourse = coursesData.find(c => c.id === parseInt(courseId));
    setCourse(foundCourse);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [courseId]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const applyPromoCode = () => {
    // Simulate promo code validation
    if (formData.promoCode.toLowerCase() === 'edu25') {
      const discount = course.price * 0.25;
      setDiscountAmount(discount);
      setPromoApplied(true);
    } else {
      setErrors({
        ...errors,
        promoCode: 'Invalid promo code'
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    // Simple card validation
    if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Valid 16-digit card number is required';
    }
    
    // Expiry date validation (MM/YY format)
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!formData.cardExpiry.trim() || !expiryRegex.test(formData.cardExpiry)) {
      newErrors.cardExpiry = 'Valid expiry date (MM/YY) is required';
    }
    
    // CVV validation (3 or 4 digits)
    const cvvRegex = /^[0-9]{3,4}$/;
    if (!formData.cvv.trim() || !cvvRegex.test(formData.cvv)) {
      newErrors.cvv = 'Valid CVV (3-4 digits) is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate enrollment processing
      // In a real app, this would send data to a backend API
      
      setTimeout(() => {
        // Simulate successful enrollment
        alert('Enrollment successful! You now have access to the course.');
        navigate(`/course/${courseId}/learn`);
      }, 1500);
    }
  };
  
  if (!course) {
    return <div className="loading">Loading enrollment details...</div>;
  }
  
  // Calculate final price
  const finalPrice = promoApplied ? (course.price - discountAmount).toFixed(2) : course.price;
  
  return (
    <div className="enrollment-page">
      <div className="enrollment-container">
        <div className="course-summary">
          <h2>Enrollment Summary</h2>
          <div className="course-info">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-details">
              <h3>{course.title}</h3>
              <p className="course-instructor">By {course.instructor}</p>
              <div className="course-meta">
                <span className="meta-item">
                  <span className="meta-icon">⭐</span> {course.rating}
                </span>
                <span className="meta-item">
                  <span className="meta-icon">👨‍🎓</span> {course.students} students
                </span>
              </div>
            </div>
          </div>
          
          <div className="price-summary">
            <div className="price-item">
              <span>Original Price:</span>
              <span>${course.price}</span>
            </div>
            
            {promoApplied && (
              <div className="price-item discount">
                <span>Discount:</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="price-total">
              <span>Total:</span>
              <span>${finalPrice}</span>
            </div>
          </div>
          
          <div className="promo-section">
            <h4>Have a promo code?</h4>
            <div className="promo-input">
              <input 
                type="text" 
                name="promoCode" 
                value={formData.promoCode}
                onChange={handleChange}
                placeholder="Enter promo code"
              />
              <button 
                onClick={applyPromoCode} 
                disabled={promoApplied || !formData.promoCode}
              >
                Apply
              </button>
            </div>
            {errors.promoCode && <div className="error-message">{errors.promoCode}</div>}
            {promoApplied && <div className="success-message">Promo code applied successfully!</div>}
            <p className="promo-tip">Try promo code "EDU25" for 25% off</p>
          </div>
        </div>
        
        <div className="payment-section">
          <h2>Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <div className="error-message">{errors.firstName}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <div className="error-message">{errors.lastName}</div>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            
            <div className="card-section">
              <h3>Card Details</h3>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  name="cardNumber" 
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                />
                {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cardExpiry">Expiry Date</label>
                  <input 
                    type="text" 
                    id="cardExpiry" 
                    name="cardExpiry" 
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                  {errors.cardExpiry && <div className="error-message">{errors.cardExpiry}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    name="cvv" 
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="4"
                  />
                  {errors.cvv && <div className="error-message">{errors.cvv}</div>}
                </div>
              </div>
            </div>
            
            <div className="payment-footer">
              <p className="secure-note">
                <span className="lock-icon">🔒</span> Your payment information is secure and encrypted
              </p>
              
              <button type="submit" className="enroll-button">
                Complete Enrollment
              </button>
              
              <p className="terms-note">
                By completing your enrollment, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentPage; 