const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const History = require("./history");

const options = { toJSON: { virtuals: true } };
const eventSchema = new Schema(
  {
    title: String,
    description: String,
    location: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: "History",
      },
    ],
  },
  options
);
eventSchema.virtual("properties.popUpMarkup").get(function () {
  return `<strong><a href="/events/${this._id}">${this.title}</a>`;
});

eventSchema.post("findOneAndDelete", async function (data) {
  if (data) {
    await History.deleteMany({
      _id: {
        $in: data.history,
      },
    });
  }
});

module.exports = mongoose.model("Event", eventSchema);
