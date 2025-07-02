import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('image', formData.image);

    try {
      await axios.post(`${API_BASE_URL}/projects`, data);
      alert(' Project added successfully!');
      setFormData({ name: '', description: '', image: null });
      setPreview(null);
    } catch (err) {
      alert(' Failed to add project.');
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-full h-48 object-cover rounded border"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full py-2 text-white rounded hover:bg-blue-700 transition font-semibold"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
