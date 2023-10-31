import * as yes24Repository from '../repository/yes24Repository.js';
import ejs from 'ejs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function login (req, res) {

  ejs
  .renderFile('./template/login.ejs', {})
  .then((data) => {
    res.end(data);
  })
  .catch(console.error);
}

export async function loginPage(req, res) {
  const { uid, pass } = req.body;
  const dpass = await yes24Repository.loginPage(uid);
  const result = await bcrypt.compare(pass, dpass.pass);

  if(result){
    const token = createToken(uid)

    res
    .cookie('x_auth', token, {maxAge : 60*60*1000, httpOnly : true})
    .status(200)
    .redirect('/BestSeller');
  }

  // 여기서 보내는건 제이슨파일이기때문에 alert 은 자바스크립트 명령어 이므로 사용이 불가능
  // 단, 조건을 찾아보면 되긴함
}

function createToken(uid){
  return jwt.sign(
    { uid : uid }, '61bA17Z/m-Io'
  )
}