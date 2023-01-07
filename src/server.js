require("dotenv").config();
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");

const { PORT } = process.env;

// Cotrollers
const {
  createUsers,
  loginUsers,
  DeleteUser,
} = require("./Controllers/users");

const {
  createProblema,
  getProblema,
  toogleStatus,
  deleteProblema,
  editProblema,
  getProblemaImage,
} = require("./Controllers/problemas/");

// Middlewares

const {
  handle404,
  handleErrors,
  Admin,
} = require("./Middlewares");
const validateAuth = require("./Middlewares/validAuth");
const {
  ToggleLike,
} = require("./Controllers/likes");

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:3306"],
  })
);

app.use(express.json());
app.use(fileUpload());

// Endpoints usuarios:

app.post("/user", createUsers);
app.delete("/users/:id", validateAuth, Admin, DeleteUser);
app.post("/login", loginUsers);

// Endpoints problemas:

app.post(
  "/create",
  validateAuth,
  Admin,
  createProblema
);
app.delete(
  "/problemas/:id",
  validateAuth,
  Admin,
  deleteProblema
);
app.get("/search", getProblema);
app.get("/search/:id", getProblemaImage);
app.post(
  "/problemas/:id/like",
  validateAuth,
  ToggleLike
);
app.put("/problemas/:id/edit", validateAuth, Admin, editProblema)
app.put(
  "/problemas/:id/status",
  validateAuth,
  Admin,
  toogleStatus
);

app.use(handle404);

app.use(handleErrors);

app.listen(PORT, () => {
  console.log(
    "Server listening on port:",
    ` ${PORT}`
  );
});
