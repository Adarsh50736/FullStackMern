const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes (wrap in try-catch to catch route load errors)
try {
  app.use('/api/projects', require('./routes/projectRoutes'));
  app.use('/api/clients', require('./routes/clientRoutes'));
  app.use('/api/contacts', require('./routes/contactRoutes'));
  app.use('/api/newsletter', require('./routes/newsletterRoutes'));
} catch (e) {
  console.error("Route load error:", e.message);
}

// DB & Server Start
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

if (!URI) {
  console.error(" MONGO_URI not found in .env");
  process.exit(1);
}

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(" Server running on port", PORT);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1);
  });
