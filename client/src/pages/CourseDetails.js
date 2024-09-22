import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const courses = [
  { id: 1, title: 'Cybersecurity Fundamentals', content: 'Full course content on protecting digital assets.' },
  { id: 2, title: 'Reverse Engineering Techniques', content: 'Deep dive into reverse engineering methodologies.' },
  { id: 3, title: 'Data Security and Encryption', content: 'Comprehensive guide to encryption methods.' },
  { id: 4, title: 'Advanced Malware Analysis', content: ' Learn how to identify, isolate, and mitigate malware threats in real-world scenarios.' },
  { id: 5, title: 'Ethical Hacking and Penetration Testing', content: 'Learn the art of ethical hacking and penetration testing to assess the vulnerabilities in networks and systems.' },
  { id: 6, title: 'Security Auditing and Compliance', content: ' Learn how to protect organizations from potential security breaches and avoid costly fines.' },
];

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <div>Course not found</div>;

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>{course.content}</p>
      <button className="pay-button">Pay Now</button>
    </div>
  );
};

export default CourseDetails;
