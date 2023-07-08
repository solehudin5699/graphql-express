const db = require('../db');

const models = {
  getPost: (params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      const sql = `SELECT * FROM posts where id = ${id}`;
      db.get(sql, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  },
  getPosts: () => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM posts ;`;
      db.all(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
  createPost: (body) => {
    return new Promise((resolve, reject) => {
      const hasEmptyField = Object.values(body).some((el) => !el);
      if (hasEmptyField) {
        reject({ error: true, message: 'All fields must be filled' });
      } else {
        const sql = 'INSERT INTO posts (title, body, slug) VALUES (? , ? , ?)';
        db.run(sql, [body.title, body.body, body.slug], (result, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      }
    });
  },
};

module.exports = models;
