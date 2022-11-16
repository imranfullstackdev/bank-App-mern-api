const express = require("express");
const app = express();
const cors=require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config()
const db=require('./db/db')

app.use("/", require("./router/router"));
app.listen(8000, () => {
  console.log("app is listening at the port 8000");
});
