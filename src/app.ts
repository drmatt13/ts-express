import express from "express";
import path from "path";

// routes
import defaultRouter from "./routes/default";
import exampleApiRouter from "./routes/api";

const app = express();
const port =
  process.env.PORT || process.env.NODE_ENV === "production" ? 80 : 5000;

// view engine setup, use ejs templates in the views folder
// // use res.render from within an express controller to load up an ejs view file
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));

// configure express app to use express.json middleware
// this will allow you to parse the json data and url encoded data in requests
app.use(express.json());

// // routes
app.use("/", defaultRouter);
app.use("/api", exampleApiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
