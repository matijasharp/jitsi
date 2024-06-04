import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { email } = req.body;
  const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' });
  res.status(200).json({ token });
}
