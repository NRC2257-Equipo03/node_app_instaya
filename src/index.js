const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get("/", (req,res) => {
    res.send("welcome to my api")
});
app.listen(port, () => console.log('server listening on port' , port));
