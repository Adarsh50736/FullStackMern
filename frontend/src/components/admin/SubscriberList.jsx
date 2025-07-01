import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/newsletter`)
      .then(res => setSubscribers(res.data))
      .catch(err => console.error('Error fetching subscribers:', err));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h3 className="text-xl font-semibold mb-4">Newsletter Subscribers</h3>

      {subscribers.length === 0 ? (
        <p className="text-gray-500">No subscribers found.</p>
      ) : (
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-3 text-left border-b">Email</th>
              <th className="p-3 text-left border-b">Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber._id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{subscriber.email}</td>
                <td className="p-3 border-b text-sm text-gray-500">
                  {new Date(subscriber.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubscriberList;
