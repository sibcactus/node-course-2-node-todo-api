var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://mongo-stend1.noregress.shot.x340.org:27017/TodoApp"
);
module.exports = {
  mongoose
};
