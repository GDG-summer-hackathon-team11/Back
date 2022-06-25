import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY;
const algorithm = process.env.JWT_ALGORITHM;
const expiresIn = process.env.JWT_EXPIRE;
const issuer = process.env.JWT_ISSUER;

const option = { algorithm, expiresIn, issuer };

function makeToken(payload) {
  return jwt.sign(payload, secretKey, option);
}

function decodePayload(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { makeToken, decodePayload }