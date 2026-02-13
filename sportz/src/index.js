import express, { json } from "express";

const app = express();

const PORT = 8008;

app.use(express.json());

app.listen(PORT, () => {
  console.log("server is running on Port", PORT);
});
