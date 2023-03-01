require("dotenv").config();
const path = require('path');
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
  createProblemas,
  getProblemas,
  toogleStatus,
  deleteProblemas,
  editProblemas,
  getProblemasImage,
  getAllProblemas,
} = require("./Controllers/problemas");

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
    origin: ["http://localhost:3000"],
  })
);
app.use('/images', express.static(path.join(__dirname, 'Uploads')));
app.use(express.json());
app.use(fileUpload());

// Endpoints usuarios:

app.post("/registeruser", createUsers);
app.delete("/user/:id", validateAuth, Admin, DeleteUser);
app.post("/login", loginUsers);

// Endpoints problemas:

app.get('/images', (req, res) => {
  const fs = require('fs');
  const directoryPath = path.join(__dirname, 'Uploads');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error leyendo la carpeta de imágenes:', err);
      return res.status(500).send('Error interno del servidor');
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const images = files.filter(file => imageExtensions.includes(path.extname(file)));
    console.log(images);

    const response = images.map(file => ({
      filename: file,
      id: file.id,
      url: `/images/${file}`,
    }));

    res.json(response);
  });
});



app.post(
  "/createproblema",
  validateAuth,
  Admin,
  createProblemas
);
app.delete(
  "/problemas/:id",
  validateAuth,
  Admin,
  deleteProblemas
);
app.get("/problemas", getAllProblemas);
app.get("/search", getProblemas)
app.get("/problemas/:id", getProblemasImage);
app.post(
  "/problemas/:id/like",
  validateAuth,
  ToggleLike
);
app.put("/problemas/:id/edit", validateAuth, Admin, editProblemas)
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
