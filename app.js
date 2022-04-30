const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const { appendFileSync } = require("fs");
const methodOverride = require("method-override");
const { _deserializers } = require("passport/lib");
const ExpressError = require("./utils/ExpressErrors");
const eventsRoutes = require("./routes/events");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));
app.use(mongoSanitize());

// app.use((req, res, next) => {
//   res.locals.currUser = req.user;
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   next();
// });
app.use("/events", eventsRoutes);
app.get("/", (req, res) => {
  res.render("home.ejs");
  //   res.send("Hello");
});

// app.get("/", userRoutes);
// app.use("/events", eventsRoutes);

app.all("*", (req, res, next) => {
  next(new ExpressError("Requested page not found", 404));
});

// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Oops, something went wrong";
//   res.status(statusCode).render("errors", { err });
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("connected");
});
