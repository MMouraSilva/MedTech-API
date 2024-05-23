const express = require('express');
const app = express();
const http = require('http').createServer(app);
const connection = require("./database/connection");
const bodyParser = require('body-parser');
const cors = require("cors");

const patientRoutes = require("./Routes/patient");
const doctorRoutes = require("./Routes/doctor");
const scheduleRoutes = require("./Routes/schedule");
const appointmentRoutes = require("./Routes/appointment");

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

app.use("/", doctorRoutes);

app.use("/", scheduleRoutes);

app.use("/", appointmentRoutes);

http.listen(9500, () => {
    console.log('App rodando!');
});