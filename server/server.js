const mongoose = require("mongoose");
const express = require("express");
const Cors = require("cors");

//App config
//mongodb password for amazon-clone user = jW4cHbvnlwYXbiks
const app = express();

const port = process.env.PORT || 8001;
const password = "Q7H2t3Tb91F5jXVj";
const connection_URL = `mongodb+srv://user62:${password}@cluster0.zgysvx9.mongodb.net/?retryWrites=true&w=majority`;


//middlewares
app.use(express.json());
app.use(Cors());

//routing
const todoRouter = require("./src/routes/todo.js");
app.use("/api", todoRouter);


//Db config
mongoose
    .connect(connection_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
  .then(() => {
    console.log("MONGO DB connected");
  })
  .catch((err) => {
    console.log("MONGODB not connected due to =>", err);
  });

//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Todo express server is working fine.");
});

//Listener
app.listen(port, () => {
  console.log(`Express Server Listening on localhost: ${port}`);
});

