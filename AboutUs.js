
import React from 'react';
import Navbar from './Navbar';
import './aboutus.css'; // Import CSS for styling

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">About Us</h2>

        {/* Restaurant Overview Section */}
        <div className="section">
          <h3>Restaurant Overview</h3>
          <p>
            Welcome to <strong>Tasty Bites</strong> – your go-to place for mouthwatering dishes made with fresh ingredients. We offer a variety of delicious pizzas, pastas, burgers, and more. Whether you are here for a casual meal or a family gathering, we are committed to providing an exceptional dining experience.
          </p>
        </div>

        {/* Location Section */}
        <div className="section">
          <h3>Our Location</h3>
          <p>
            Located in the heart of the city, we are easily accessible for everyone. Visit us at:
          </p>
          <p><strong>Tasty Bites Restaurant</strong></p>
          <p>123 Tasty Street, Cityville, USA</p>
          <p>Open: Monday to Sunday - 10:00 AM to 10:00 PM</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* History Section */}
        <div className="section">
          <h3>Our History</h3>
          <p>
            Tasty Bites was founded in 2010 by a group of passionate chefs with a vision to bring high-quality, flavorful food to the community. Starting as a small pizzeria, we quickly became a local favorite. Over the years, we've expanded our menu to include a wide range of dishes, and we now proudly serve thousands of satisfied customers every year.
          </p>
          <p>
            Our restaurant has always been a family-owned business, and we take pride in creating a warm, welcoming atmosphere where guests feel like part of our family.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;