import * as signRepository from '../repository/signRepository.js';
import bcrypt from 'bcrypt';

export async function signUp(req, res) {
  const { id, pass, name, content } = req.body;
  const hashPass = bcrypt.hashSync(pass, 10); // 8 ~ 10 자리가 안정적
  const params = [id, hashPass, name, content];
  const result = await signRepository.create(params);
  if(result === 'success') res.redirect('/dwitter');

  // hashPass ==> $2b$10$SDoJEszfjpUipN1C7MtvI.TunFkqvLHcGVqUdnrSavP3E2E9t8nvO, 단방향으로 암호화한것을 다시 되돌릴수없음
  // $2b 걸리는 시간, $10 서버 코스트비용, $SDoJEszfjpUipN1C7MtvI. 솔트(salt) 뒤에 암호화 전에 방어막 역할, TunFkqvLHcGVqUdnrSavP3E2E9t8nvO 비번 암호화
}