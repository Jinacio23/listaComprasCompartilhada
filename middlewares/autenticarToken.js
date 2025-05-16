require('dotenv').config();

const jwt = require('jsonwebtoken');
const JWT_SECRET =  process.env.JWT_SECRET;

function autenticarToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.usuario = payload; // anexa o payload ao request
    next();
  } catch (error) {
    res.status(403).json({ mensagem: 'Token inválido ou expirado' });
  }
}

module.exports = autenticarToken;
