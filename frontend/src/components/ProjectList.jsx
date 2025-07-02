import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div>
      <h2>Our Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {projects.map(project => (
          <div key={project._id} style={{ border: '1px solid #ccc', padding: '16px', width: '250px' }}>
            <img
              src={`https://fullstackmern-g5bb.onrender.com/${project.image}`}
              alt={project.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
