import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';
const stripePromise = loadStripe('pk_test_51Q15kDDu7bc2WAsc6nvbl5wtnW7ql8xiDyH4E9rC25wtcEhyafEMrCCZgXnbdbDvhuMJqYJ97DEW8Fk10z4MNtJ200DErLfucl'); // Replace with your Stripe public key

const courses = [
  { id: 1, title: 'Cybersecurity Fundamentals', description: 'Learn the basics of protecting digital assets.', price: '$49' },
  { id: 2, title: 'Reverse Engineering Techniques', description: 'Understand the techniques used to reverse engineer software.', price: '$79' },
  { id: 3, title: 'Data Security and Encryption', description: 'Master data encryption techniques to secure sensitive information.', price: '$99' },
  { id: 4, title: 'Advanced Malware Analysis', description: 'Analyze malware threats and learn how to mitigate them in real-world scenarios.', price: '$129' },
  { id: 5, title: 'Ethical Hacking and Penetration Testing', description: 'Assess vulnerabilities in networks and systems to enhance security.', price: '$149' },
  { id: 6, title: 'Security Auditing and Compliance', description: 'Ensure compliance with industry standards and regulations to avoid breaches.', price: '$199' },
];

function Homepage() {
  const navigate = useNavigate(); 
  
  const handleCheckout = async () => {
    try {
      const response = await fetch('mutaengine-backend-zhy5.vercel.app/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const session = await response.json(); 

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }

      navigate('/payment-success', { state: { sessionId: session.id } });

    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className='home'>

<h1>Revolutionizing Software Security</h1>
      <p className="subtitle">Courses to Combat Reverse Engineering, Cybersecurity Threats, and Data Security Breaches</p>
      
      <div className="course-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p className="price">{course.price}</p>
            <button onClick={handleCheckout} className='pay-button'>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
