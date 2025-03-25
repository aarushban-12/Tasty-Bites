import React from 'react';
import './jobs.css';
import Navbar from './Navbar';

const JobOpenings = () => {
    const jobs = [
      {
        id: 1,
        title: 'Front-end Developer',
        description: 'We are looking for a passionate Front-end Developer to create beautiful and functional user interfaces.',
        location: 'Remote',
        link: '#'
      },
      {
        id: 2,
        title: 'Back-end Developer',
        description: 'Join our team as a Back-end Developer and build scalable and reliable server-side applications.',
        location: 'New York, NY',
        link: '#'
      },
      {
        id: 3,
        title: 'Full-stack Developer',
        description: 'As a Full-stack Developer, you will be responsible for both front-end and back-end development.',
        location: 'San Francisco, CA',
        link: '#'
      },
      // Physical jobs
      {
        id: 4,
        title: 'Dishwasher',
        description: 'Looking for a dishwasher to help maintain cleanliness and order in the kitchen.',
        location: 'New York, NY',
        link: '#'
      },
      {
        id: 5,
        title: 'Cook',
        description: 'Join our kitchen staff as a cook, responsible for preparing meals to perfection.',
        location: 'San Francisco, CA',
        link: '#'
      }
    ];
  
    return (
        <div>
            <Navbar />
        
      <div className="job-openings">
        <h2>Job Openings</h2>
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <a href={job.link} className="apply-btn">Apply Now</a>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };

export default JobOpenings;
