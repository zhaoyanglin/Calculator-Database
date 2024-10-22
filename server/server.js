const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const calculatorRoute = require("./routes/calculator.route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/calculator', calculatorRoute);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});