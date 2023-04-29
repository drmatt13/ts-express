import express from "express";

// routes
import defaultRouter from "./routes/default";
import exampleApiRouter from "./routes/api";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use("/", defaultRouter);
app.use("/api", exampleApiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
