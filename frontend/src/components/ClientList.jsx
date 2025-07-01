import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/clients`)
      .then(res => setClients(res.data))
      .catch(err => console.error("Error fetching clients:", err));
  }, []);

  return (
    <div>
      <h2>Happy Clients</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {clients.map(client => (
          <div key={client._id} style={{ border: '1px solid #ccc', padding: '16px', width: '250px' }}>
            <img
              src={`http://localhost:5000/${client.image}`}
              alt={client.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <p>"{client.description}"</p>
            <h4>{client.name}</h4>
            <small>{client.designation}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
