import express from "express";
import cors from "cors";

const app = express();

let corsOptions = {
  origin: "http://localhost:3000",
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing api
app.get("/", (req, res) => {
  res.json({ message: "Hello from test api" });
});

//port

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
