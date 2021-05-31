const Router = require('express').Router();

const {
    authorizeAndExtractTokenAsync
} = require('../Filters/JWTFilter.js');

const AuthorsController = require('./AuthorsController.js');
const BooksController = require('./BooksController.js');
const PublishersController = require('./PublishersController.js');
const BooksPublishersController = require('./BooksPublishersController.js');
const UsersController = require('./UsersController.js');

Router.use('/v1/authors', authorizeAndExtractTokenAsync, AuthorsController);
Router.use('/v1/books', authorizeAndExtractTokenAsync, BooksController);
Router.use('/v1/publishers', authorizeAndExtractTokenAsync, PublishersController);
Router.use('/v1/books', authorizeAndExtractTokenAsync, BooksPublishersController);

Router.use('/v1/users', authorizeAndExtractTokenAsync, UsersController);

module.exports = Router;