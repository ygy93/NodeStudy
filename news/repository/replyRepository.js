import { db } from '../db/database.js';

export async function create(content, nid){
  return db
  .execute('insert into news_reply(content, nid, redate) values(?, ?, sysdate())',[content, nid])
  .then((result) => 'success')
}

export async function getReply(nid){
  return db
  .execute('select rid, content, nid, redate from news_reply where nid = ?', [nid])
  .then((result) => result[0])
}

export async function remove(nid){
  return db
  .execute('delete from news_reply where nid = ?', [nid])
  .then((result) => 'success')
}