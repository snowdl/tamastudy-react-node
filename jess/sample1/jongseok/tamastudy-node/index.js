//import express from 'express';
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const router = require('./routes/index');
const errorResponse = require('./Middlewares/errorResponse');
const colors = require('colors');
const app = express();

const PORT = process.env.PORT;
const MASTER = process.env.NAME;

app.use(morgan('dev'));

console.log(process.env.NAME);

//! Routes
app.use(router);

// app.use((req, res, next) => {
//   if (req.user === null) {
//     console.log(req.user);
//     return res.json({ success: false, data: {} });
//   }
//   console.log(req);
//   next();
// });

//! error response middleware
app.use(errorResponse);

app.listen(PORT, () => {
  console.log(`${MASTER}의 서버에 접속했습니다. ${PORT}번 포트로 연결 되었습니다.`.bgWhite);
});

// const express = require('express');
// const morgan = require('morgan');
// require('dotenv').config();

// const app = express();

// // Dev logging middleware
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// app.get('/', (req, res) => {
//   res.json({ success: true, message: '접속완료' });
// });

// const server = app.listen(process.env.PORT, () =>
//   console.log(`${process.env.PORT}번으로 Node API 가동 중입니다. `),
// );

// // Handle unhandled promise rejections 처리되지 않은 약속 거부 처리
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Error: ${err.message}`.red);
//   // Close server & exit process
//   server.close(() => process.exit(1));
// });
