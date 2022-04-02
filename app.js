const express = require("express");
const path = require("path");

//Mi servidor
const app = express();

const PORT = process.env.PORT || 3000;

//Se definen vincular carpeta completa de CSS e imagenes etc.
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Servidor activado, Ctrl + C para apagar.");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
