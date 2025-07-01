const Subscriber = require('../models/subscriber');

const subscribeToNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscribed successfully', subscriber: newSubscriber });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { subscribeToNewsletter, getAllSubscribers };
