// express 에서 가져오고 이름은 express
import express from 'express'; // 타입을 모듈로 했기에 자바스크립트 식으로 작성
import route from './route.js';
import testRouter from './test.js';
import joinRouter from './join.js';

const app = express(); // 절대값이므로 다른곳에서 다시 선언하면 그곳에서 서버가 초기화됨
app.use(express.json()); // use 는 해당 줄에서 하위 모든 주소를 호출하기에 상단에서 선언함

app.use('/', route);
// app.get('/', route);
// app.post('/', route);
// app.put('/:id', route);
// app.delete('/:id/:name/:address', route);
app.use('/test', testRouter);
app.use('/join', joinRouter);

app.listen(8080);