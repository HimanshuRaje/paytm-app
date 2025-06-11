const express = require("express");
const cors = require("cors");

const app = express(); // Initialize app before using it

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
