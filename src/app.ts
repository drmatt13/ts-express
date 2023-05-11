import cookieParser from "cookie-parser";
import express from "express";
import path from "path";
import dotenv from "dotenv";

// routes
import defaultRouter from "./routes/default";
import exampleApiRouter from "./routes/api";

const app = express();
const port =
  process.env.PORT || process.env.NODE_ENV === "production" ? 80 : 5000;

// load environment variables from .env file
dotenv.config();

// view engine setup, use ejs templates in the views folder
// use res.render from within an express controller to load up an ejs view file
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// set the public folder to serve public assets
app.use(express.static(path.join(__dirname, "public")));

// configure express app to use express.json middleware
// this will allow you to parse the json data and url encoded data in requests
app.use(express.json());

// cookie parser
app.use(cookieParser());

// routes
app.use("/", defaultRouter);
app.use("/api", exampleApiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
