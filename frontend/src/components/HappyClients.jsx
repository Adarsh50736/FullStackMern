import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const HappyClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/clients`)
      .then((res) => setClients(res.data))
      .catch((err) => console.error('Error loading clients:', err));
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-12">Happy Clients</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {clients.map((client) => (
          <div key={client._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={`http://localhost:5000/${client.image}`}
              alt={client.name}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-3">"{client.description}"</p>
            <h3 className="text-lg font-semibold">{client.name}</h3>
            <p className="text-sm text-gray-500">{client.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
