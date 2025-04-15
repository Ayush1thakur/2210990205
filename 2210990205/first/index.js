const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/register-company', (req, res) => {
  const { companyName, email } = req.body;

  if (!companyName || !email) {
    return res.status(400).json({ message: 'Company name and email are required.' });
  }

  res.status(201).json({ message: 'Company registered successfully', data: { companyName, email } });
});

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
});
