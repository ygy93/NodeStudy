import { db } from '../db/database.js';

export async function getAll() {
  return db
  .execute('select nid, url, title, content, left(rdate, 10) as rdate from news')
  .then((result) => result[0])
}

export async function createNews(url, title, content) {
  return db
  .execute('insert into news(url, title, content, rdate) values(?, ?, ?, curdate())', [url, title, content])
  .then((result) => 'success')
}

export async function getNews(nid) {
  return db
  .execute('select nid, url, title, content, left(rdate, 10) as rdate from news where nid = ?',[nid])
  .then((result) => result[0])
}

export async function remove(nid){
  return db
  .execute('delete from news where nid = ?', [nid])
  .then((result) => 'success')
}