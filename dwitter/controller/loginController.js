import * as loginRepository from '../repository/loginRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { id, pass } = req.body;
  // form 에서 넘어온 pass --> hash 알고리즘 적용
  // db 에 저장된 패스워드 가져오기
  const dpass = await loginRepository.create(id);
  const result = await bcrypt.compare(pass, dpass.pass);
  if(result) {
    const token = createToken(id)
    res
    .cookie('x_auth', token, {maxAge : 60*60*1000, httpOnly : true}) // 토큰명, 토큰정보, 유효기간
    .status(200)
    .redirect('/dwitter')

  }
  
  // const result = await loginRepository.create(id, pass);
  // if(result === 'success') res.redirect('/dwitter');
}

function createToken(id){
  return jwt.sign(
    {id : id}, 'XLlH0CHl3_3N' // https://www.lastpass.com/features/password-generator
  )
}