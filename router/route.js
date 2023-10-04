import express from 'express';

const router = express.Router();

// get --> 요청 path : / --> 응답 : GET: /
router
.get('/', 
        (req, res, next) => {
          // res.send('GET: /');
          console.log('first');
          next();
        },
        (req, res, next) => {
          console.log('second');
          next();
        },
        (req, res, next) => {
          console.log('third');
        })

// post --> 요청 path : / --> 응답 : POST: /
.post('/', (req, res, next) => {
  res.send('POST: /')
})

// put --> 요청 path : /:id --> 응답 : PUT: /:id
// 컨트롤 시프트 p --> snippets --> javascript
.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.send(`PUT: /:id --> ${id}`);
})

// delete --> 요청 path : /:id --> 응답 : DELETE: /:id
.delete('/:id/:name/:address', (req, res, next) => {
  const { id, name, address } = req.params;
  // const id = req.params.id;
  // const name = req.params.name;
  // const address = req.params.address;
  res.send(`DELETE: /:id --> ${id}, ${name}, ${address}`);
})

// 404 에러 처리
.use((req, res, next) => {
  res.status(404).send('404 Not Found Page');
});

export default router;