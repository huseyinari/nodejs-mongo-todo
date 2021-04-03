const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./db');
require('dotenv').config();
const todoRouters = require('./router/todoRouters');

db.connectMyDb();   // veri tabanıma bağlan

app.use(cors());

app.use(express.json()); // request ile gelen değerlere erişebilmek için json olarak ayarlıyoruz
app.use(express.static('public'));
app.use('/todo',todoRouters);

app.listen(process.env.APP_PORT,() => {
    console.log("Server " + process.env.APP_PORT + " portunda başlatıldı...");
});