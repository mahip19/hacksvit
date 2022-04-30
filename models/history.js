const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const historySchema = new Schema({
  record: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("History", historySchema);
