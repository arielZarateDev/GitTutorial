const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
//============================================================================
const app = express();

let port = process.env.PORT || 3001;
app.use(express.json()); //express json
app.use(morgan("dev")); //morgan

app.get("/", (req, res) => {
  res.json({
    message: "Welcome al tutorial de Git ",
  });
});

app.listen(port, () => {
  console.log(`iniciando en el servidor del puerto ${port}`);
});
