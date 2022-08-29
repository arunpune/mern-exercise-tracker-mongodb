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

const citynameRouter = require("./routes/cityname");
const citystorenameRouter = require("./routes/citystorename");
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
const port = process.env.PORT || 5000;
//const port = process.env.PORT;
console.log(`Your port is ${port}`);

app.use(cors());
app.use(express.json());

app.use("/cityname", citynameRouter);
app.use("/citystorename", citystorenameRouter);

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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
