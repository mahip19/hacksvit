const mongoose = require("mongoose");
const Event = require("../models/event");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelper");
mongoose.connect("mongodb://localhost:27017/hacksvit", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("erro", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database Connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];
const seedDB = async () => {
  await Event.deleteMany({});
  for (let i = 0; i < 100; i++) {
    const random100 = Math.floor(Math.random() * 1000);
    // const price = Math.floor(Math.random()*20)+10;
    const event = new Event({
      author: "60e1b22576b1170a44564d80",
      location: `${cities[random100].city}, ${cities[random100].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description: "This is a nice event",
    });
    await event.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
