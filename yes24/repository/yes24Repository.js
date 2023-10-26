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


export async function getDbs() {
  return db
  .execute("select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'dbs';")
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