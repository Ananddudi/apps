const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/user.js");
const taskRouter = require("./routes/task.js");
const connect = require("./database/db.js");
const { auth } = require("./middleware/authurization.js");
const cors = require("cors");
const cookieparser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:5173", // Your React app's URL
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(express.json());
app.use(cookieparser());

app.get("/test", (req, res) => {
  res.send("hello this node is application");
});

connect();

app.use("/api", userRouter);
app.use("/api", auth, taskRouter);

const port = process.env.PORT || 3007;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
