let express = require('express')
let mongoose = require('mongoose');
let cors = require('cors')
let bodyParser = require('body-parser')
require("dotenv").config()
let app = express();

const registerRoutes = require("./routes/register.route");
    app.use(express.json());
    app.use('/api',registerRoutes);


const port = process.env.PORT || 9000;

//ROUTES


// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos atlas'))
    .catch((error) => console.error(error));
app.listen(port, () => console.log('server listening on port', port));