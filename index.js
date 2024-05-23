const express = require('express');
const app = express();
const http = require('http').createServer(app);
const connection = require("./database/connection");
const bodyParser = require('body-parser');
const cors = require("cors");

const patientRoutes = require("./Routes/patient");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida!");
    })
    .catch((msgError) => {
        console.log(msgError);
    });

app.use(cors());

app.use("/", patientRoutes);

http.listen(9500, () => {
    console.log('App rodando!');
});