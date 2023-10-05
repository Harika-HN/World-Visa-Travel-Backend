const express = require("express");
const app = express();
// require("dotenv").config();
const bodyParser = require("body-parser");
// const PORT = 3001;
const cors = require("cors");
app.use(cors());

const pdfMailer = require("./router/PdfMailer");
const connectDB = require("./config/ConnectDB");

app.use(bodyParser.json());
app.use("/", pdfMailer);

app.get("/awt", async (req, res) => {
  res.send("hello everyone");
});

app.listen(3002, async () => {
  try {
     connectDB;
    console.log("db connection success!");
  } catch (err) {
    console.log("getting error", err);
  }
});
