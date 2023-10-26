import * as loginRepository from '../repository/loginRepository.js';
import bcrypt from 'bcrypt';

export async function login(req, res) {
  const { id, pass } = req.body;
  // form 에서 넘어온 pass --> hash 알고리즘 적용
  // db 에 저장된 패스워드 가져오기
  const dpass = await loginRepository.create(id);
  const result = await bcrypt.compare(pass, dpass.pass);
  if(result === true) res.redirect('/dwitter');


  // const result = await loginRepository.create(id, pass);
  // if(result === 'success') res.redirect('/dwitter');
}