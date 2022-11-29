const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/', (req,res) => {
    res.send("Hola desarrollador");
});
const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conenctado a la base de datos atlas'))
    .catch((error) => console.error(error));
app.listen(port, () => console.log('server listening on port' , port));
