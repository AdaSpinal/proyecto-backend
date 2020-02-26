const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.json({ extended: true }));

const productRouter = require('./router/productRouter');

app.use('/api/product', productRouter);

const port = 3000;
app.listen(port,
    () =>
        console.log(`Started server at http://localhost:${port}/api/`));
