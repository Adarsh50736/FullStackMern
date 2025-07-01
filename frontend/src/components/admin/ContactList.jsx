import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/contacts`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h3 className="text-xl font-semibold mb-4">All Contact Submissions</h3>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts found.</p>
      ) : (
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-3 text-left border-b">Name</th>
              <th className="p-3 text-left border-b">Email</th>
              <th className="p-3 text-left border-b">Mobile</th>
              <th className="p-3 text-left border-b">City</th>
              <th className="p-3 text-left border-b">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{contact.fullName}</td>
                <td className="p-3 border-b">{contact.emailAddress}</td>
                <td className="p-3 border-b">{contact.mobileNumber}</td>
                <td className="p-3 border-b">{contact.city}</td>
                <td className="p-3 border-b text-sm text-gray-500">
                  {new Date(contact.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactList;
