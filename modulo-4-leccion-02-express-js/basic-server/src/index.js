const express = require("express");
const cors = require("cors");

//crear el servidor
const server = express();

//configurar el servidor
server.arguments(cors());
server.user(express.json());

//iniciar el servidor
server.listen(3000, () => console.log("Iniciando el servidor..."));