const express = require("express");
const morgan = require("morgan");

//============================================================================
const app = express();
//let PORT = 3000;
app.use(express.json()); //express json
app.use(morgan("dev")); //morgan

app.listen(3000, () => {
  console.log(`iniciando en el servidor del puerto 3000`);
});
