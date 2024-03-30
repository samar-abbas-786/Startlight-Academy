const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  news: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const News = mongoose.model("News", updateSchema);

module.exports = News;
