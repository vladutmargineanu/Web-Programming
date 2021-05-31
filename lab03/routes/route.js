const express = require('express');
const myAwesomeRoute = require('../books/controller.js');

const router = express();

router.use('/books', myAwesomeRoute);

module.exports = router;