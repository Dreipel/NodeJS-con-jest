//tomar variables de entorno del archivo env
require('dotenv').config();
const PORT = process.env.PORT;
const DBURL = process.env.URLMONGO;
//MONGO MONGOOSE CONNECTION
const db = require('./connection/db');

//configuracion express
const express = require("express");
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(require('./routes/index.routes'));

app.listen(PORT, async()=>{
    await db(DBURL);
    console.log(`server running in port ${PORT}`)
});