import * as yes24Repository from '../repository/yes24Repository.js';
import bcrypt from 'bcryptjs';

export async function signUp (req, res) {
  const { uid, pass, name, content } = req.body;
  const params = [uid, pass, name, content];
  const result = await yes24Repository.signUp(params);
}