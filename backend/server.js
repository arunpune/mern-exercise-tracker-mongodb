const express = require("express");
const mongoose = require("mongoose");
mongoose.set("debug", true);
const cors = require("cors");
const app = express();
//this localhost is for the UserInterface
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
//bezkoder-start
const cookieSession = require("cookie-session");
//bezkoder-start orgin start is not added below
//add to add some default role values to the database

//const db = require("./models");
//const Role = db.role;

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
//added by arun on 2 aug 2022
const rolesRouter = require("./routes/roles");
const productsRouter = require("./routes/products");
const storeorderRouter = require("./routes/storeorder");

require("dotenv").config();

//this values is fetched from the port in the .env file
//const port = process.env.PORT || 5000;
//why the port value is not changing, thoug the value was put in the .env file
//const port = process.env.PORT;
const port = process.env.PORT;
console.log(`Your port is ${port}`);

app.use(cors());
app.use(express.json());

//bezkoder.com-start
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//cookie session
app.use(
  cookieSession({
    name: "bezkoder-session",
    // keys: ['key1', 'key2'], // keys for encryption
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
);
//bezkoder - end

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/products", productsRouter);
app.use("/storeorder", storeorderRouter);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  //console.log(Role);
  //initial();
});

//bezkoder-start add roles to the database
/* function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      //console.log(err);
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
 */ //
//bezkoder-End add roles to the database

// simple route for testing, bezkoder-start
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes

/* require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
 */
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
