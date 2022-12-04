let express = require('express')
let mongoose = require('mongoose');
let cors = require('cors')
let bodyParser = require('body-parser')
require("dotenv").config()


let app = express();
const port = process.env.PORT || 3977;

//ROUTES
app.get('/Login', (req, res) => {
    res.send('Hola');
});


// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos atlas'))
    .catch((error) => console.error(error));
app.listen(port, () => console.log('server listening on port', port));