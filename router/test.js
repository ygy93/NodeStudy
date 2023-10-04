import express from 'express';

const router = express.Router();

router
// GET 요청 --> http://localhost:8080/test/?keyword=lol&name=hong
.get('/', (req, res, next) => { // 이곳에서 경로를 /test 를 주면 app.js 에서 중첩으로 경로가 들어가서 /test/test 로 해야하므로 빼줌
  const { keyword, name } = req.query;
  // const keyword = req.query.keyword;
  // const name = req.query.name;
  res.send(`GET: /test --> ${keyword}, ${name}`);
})

// 404 에러 처리
.use((req, res, next) => {
  res.status(404).send('404 Not Found Page');
});

export default router;