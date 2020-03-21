const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'input '],
  },
  description: {
    type: String,
    required: [true, 'input '],
  },
  username: {
    type: String,
    required: [true, 'input '],
  },

  imgUrl: {
    type: String,
    required: [true, 'image'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('post', postSchema);
