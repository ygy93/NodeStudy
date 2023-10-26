import express from 'express';
import newsRouter from './router/news.js';
import replyRouter from './router/reply.js';
// import signUpRouter from './router/signUp.js';

const app = express();

app.use('/news', newsRouter);
app.use('/reply', replyRouter);
// app.use('/signup', signUpRouter);

app.listen(8080);