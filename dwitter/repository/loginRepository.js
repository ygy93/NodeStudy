import { db } from '../db/database.js';

export async function create(id) {
  return db
  .execute('select pass from dwitter where id = ?', [id])
  .then((result) => result[0][0]) // 배열 안에 첫번째 객체의 데이터를 가져와야하므로 [0][0] 0번째 배열에 0번째
}