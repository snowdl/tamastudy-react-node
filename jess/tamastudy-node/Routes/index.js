const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');

router.get('/posts', async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      success: false,
      error: null,
      result: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
      result: null,
    });
  }
});
router.post('/post/create', async (req, res, next) => {
  try {
    // console.log(req.body);
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      username: req.body.username,
      imgUrl: req.body.imgUrl,
    });
    res.status(200).json({
      success: true,
      error: null,
      data: post,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
      result: null,
    });
  }
  //throw Error('hosting 에러!');
});

module.exports = router;
