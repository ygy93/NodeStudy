import * as yes24Repository from '../repository/yes24Repository.js';
import ejs from 'ejs';
import bcrypt from 'bcryptjs';

export async function signUp (req, res) {
  ejs
  .renderFile('./template/sign.ejs', {})
  .then((data) => {
    res.end(data)
  })
  .catch(console.error);
}

export async function signJoin (req, res) {
  const { uid, pass, name, content } = req.body;
  const hashPass = bcrypt.hashSync(pass, 10);
  const params = [uid, hashPass, name, content];
  const result = await yes24Repository.signJoin(params);

  if(result === '회원가입 성공') res.status(200).redirect('/BestSeller');
}