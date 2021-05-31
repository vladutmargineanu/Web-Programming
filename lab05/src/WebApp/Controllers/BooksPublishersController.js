const express = require('express');

const BooksPublishersRepository = require('../../Infrastructure/PostgreSQL/Repository/BooksPublishersRepository.js');
const ServerError = require('../Models/ServerError.js');
const { BookPublisherPostBody, BookPublisherPutBody, BookPublisherResponse } = require('../Models/BookPublisher.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');

const Router = express.Router();

Router.post('/:id/publishers', async (req, res) => {

    const bookPublisherBody = new BookPublisherPostBody(req.body);

    const bookPublisher = await BooksPublishersRepository.addAsync(bookPublisherBody.book_id, bookPublisherBody.publisher_id, bookPublisherBody.price);

    ResponseFilter.setResponseDetails(res, 201, new BookPublisherResponse(bookPublisher), req.originalUrl);
});

Router.put('/:bookId/publishers/:publisherId ', async (req, res) => {

    const bookPublisherBody = new BookPublisherPutBody(req.body, req.params.id);

    const bookPublisher = await BooksPublishersRepository.updateByIdAsync(bookPublisherBody.Id, bookPublisherBody.book_id, bookPublisherBody.publisher_id, bookPublisherBody.price);

    if (!bookPublisher) {
        throw new ServerError(`Author with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new BookPublisherResponse(bookPublisher));
});

Router.delete('/:bookId/publishers/:publisherId', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.MANAGER), async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }

    const bookPublisher = await BooksPublishersRepository.deleteByIdAsync(parseInt(id));

    if (!bookPublisher) {
        throw new ServerError(`Author with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;