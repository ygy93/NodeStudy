import { db } from '../db/database.js';

export async function create(params) {
  return db
  .execute('insert into dwitter(id, pass, name, date, content) values(?, ?, ?, curdate(), ?)', params)
  .then((result) => 'success')
}