const Project = require('../models/project');

const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file.path;

    const newProject = new Project({ name, description, image });
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { createProject, getAllProjects };
