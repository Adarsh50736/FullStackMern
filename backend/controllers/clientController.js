const Client = require('../models/client');

const createClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file.path;

    const newClient = new Client({ name, description, designation, image });
    await newClient.save();
    res.status(201).json({ message: 'Client added successfully', client: newClient });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { createClient, getAllClients };
