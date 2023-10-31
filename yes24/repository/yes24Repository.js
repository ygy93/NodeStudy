// view_yes24 테이블에 대한 CRUD
import { db } from '../db/database.js';

export async function getBs() {
  return db
  .execute('select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id;')
  .then((result) => result[0])
}
export async function getBsPage() {
  return db
  .execute("select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id;")
  .then((result) => result[0])
}


export async function getDbs(bs_id) {
  return db
  .execute("select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = ?;",[bs_id])
  .then((result) => result[0])
}

export async function getMbs() {
  return db
  .execute("select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'mbs';")
  .then((result) => result[0])
}

export async function getRtbs() {
  return db
  .execute("select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'rtbs';")
  .then((result) => result[0])
}

export async function getHpbs() {
  return db
  .execute("select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'hpbs';")
  .then((result) => result[0])
}

export async function getSs() {
  return db
  .execute("select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'ss';")
  .then((result) => result[0])
}


/* 회원가입 */
export async function signJoin(params) {
  return db
  .execute('insert into yes24_sign(uid, pass, name, sidate, content) values(?, ?, ?, curdate(), ?)', params)
  .then((result) => '회원가입 성공')
}

/* 로그인 */
export async function loginPage(uid){
  return db
  .execute('select pass from yes24_sign where uid = ?', [uid])
  .then((result) => result[0][0])
}