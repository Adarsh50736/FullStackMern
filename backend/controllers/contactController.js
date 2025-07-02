const Contact = require('../models/contact');

const submitContactForm = async (req, res) => {
     console.log(" Contact route hit");
  try {
    const { fullName, emailAddress, mobileNumber, city } = req.body;

    const newContact = new Contact({ fullName, emailAddress, mobileNumber, city });
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted', contact: newContact });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { submitContactForm, getAllContacts };
