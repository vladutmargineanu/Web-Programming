const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
    let date = moment(new Date());
    res.send(date.format('YYYY-MM-DD, hh:mm'));
});

app.listen(3000);