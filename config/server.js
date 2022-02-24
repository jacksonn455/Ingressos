require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes");
const {SERVER_PORT} = process.env;

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(routes);

app.listen(SERVER_PORT, function () {
  console.log(`Server on em: http://localhost:${SERVER_PORT}/`);
});

module.exports = app;
