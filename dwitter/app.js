import express from 'express';
import dwitterRouter from './router/dwitterRouter.js';
import loginRouter from './router/loginRouter.js';
import signRouter from './router/signRouter.js';

const app = express();
app.use('/dwitter', dwitterRouter);
app.use('/login', loginRouter);
app.use('/signup', signRouter);

app.listen(8080, function(){
  console.log("server start~");
})