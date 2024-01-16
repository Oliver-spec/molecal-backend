require("dotenv").config();
const express = require("express");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

app.use(logger);
app.use(express.static("public"));
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server startup at ${new Date().toLocaleString()}`);

  console.log(`Listening on port ${port}`);
});
