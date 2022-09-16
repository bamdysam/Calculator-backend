const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // info posted from html form is parsed.

app.listen(3000, () => {
    console.log('Server started at port 3000...');
});

/***** GET method *****/
app.get(`/`, (req, res) => {
    res.send('This is home page.');
})

app.get('/additionCalculator', (req, res) => {
    res.sendFile(`${__dirname}/addCalc.html`);
});

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`)
});

/***** POST method *****/
app.post('/add-calc', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = parseInt(req.body.num2);
    res.send(`Result: ${num1 + num2}`);
});

app.post('/bmi-Calculator', (req, res) => {
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    res.send(`BMI: ${weight / (Math.pow(height, 2))}`);
})
