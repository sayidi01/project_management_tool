const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const csurf = require("csurf");
const session = require("express-session");

const app = express();
const connecting = require("./db/conn.js");
const User = require("./models/users.js");
const userRouter = require("./routers/userRouter.js");
const projectsRouter = require("./routers/projectsRouter.js");
const tasksRouter = require("./routers/tasksRouter.js");

connecting
  .then(() => {
    console.log("DB conneted");
    User.find().then((data) => console.log(data));
  })
  .catch((err) => console.log("couldnt connect", err));

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "finntaghadiasahbi",
    resave: true,
    saveUninitialized: true,
  })
);

// app.use(csurf({cookie : false}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

//Routers

app.use("/user", userRouter);
app.use("/projects", projectsRouter);
app.use("/tasks",tasksRouter);

app.use(require("./middlewares/error.js"));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("listening one the PORT :", PORT));
