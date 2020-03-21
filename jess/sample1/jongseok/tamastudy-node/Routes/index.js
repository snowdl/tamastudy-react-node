const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ success: true, message: '접속 성공 !' });
});

router.get('/post', (req, res, next) => {
  //throw Error('hosting 에러!');
  const post = [
    {
      id: 1,
      title: 'node',
    },
    {
      id: 2,
      title: 'ruby',
    },
  ];
  res.json({ success: true, data: post });
});

module.exports = router;
//export default sldkfjsdlf
