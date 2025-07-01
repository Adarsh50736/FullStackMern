import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Error loading projects:', err));
  }, []);

  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold mb-12">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project._id} className="bg-gray-50 rounded shadow hover:shadow-lg transition">
            <img
              src={`http://localhost:5000/${project.image}`}
              alt={project.name}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
