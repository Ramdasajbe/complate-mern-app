const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
const signup = require("./routes/user-signup");
const login = require("./routes/user-login");

const product = require("./routes/usr-producr");

const db = require("./config/db");
const app = express();
app.use(cors());
app.use(express.json());

db();

app.use("/api", signup);
app.use("/api", login);

app.use("/api", product);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
