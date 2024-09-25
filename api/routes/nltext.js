const router = require("express").Router();
const TextModel = require('../models/TextModel');

router.post('/', async (req, res) => {
  const { text } = req.body;

  try {
    const newText = new TextModel({ text });
    await newText.save();
    res.status(201).json({ message: 'Text saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving text.' });
  }
});

module.exports = router;