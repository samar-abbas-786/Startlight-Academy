const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  news: {
    type: String,
    required: true,
  },
});

const News = mongoose.model("News", updateSchema);

module.exports = News;
