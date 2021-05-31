
const express = require('express');

const PublishersRepository = require('../../Infrastructure/PostgreSQL/Repository/PublishersRepository.js');
const ServerError = require('../Models/ServerError.js');
const { PublisherPostBody, PublisherPutBody, PublisherResponse } = require('../Models/Publisher.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

Router.get('/', async (req, res) => {

    const publishers = await PublishersRepository.getAllAsync();
    const only_names = publishers.map(item => item.name);
    console.log('ID Publisher ----- ' + publishers.map(item => item.id));

    ResponseFilter.setResponseDetails(res, 200, only_names.map(publisher => new PublisherResponse(publisher)));

});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }

    const publisher = await PublishersRepository.getByIdAsync(parseInt(id));
    const publisherName = publisher.map(item => item.name);

    ResponseFilter.setResponseDetails(res, 200, new PublisherResponse(publisherName));
});

Router.post('/', async (req, res) => {
    const publisherBody = new PublisherPostBody(req.body);

    const name = await PublisherRepository.addAsync(publisherBody.name);

    ResponseFilter.setResponseDetails(res, 201, new PublisherResponse(name), req.originalUrl);
});

Router.put('/:id', async (req, res) => {
    const publisherBody = new PublisherPutBody(req.body, req.params.id);

    const name = await PublishersRepository.updateByIdAsync(publisherBody.Id, publisherBody.name);

    if (!name) {
        throw new ServerError(`Publisher with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new PublisherResponse(name));
});

Router.delete('/:id', async (req, res) => {
    const { 
        id 
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }

    const name = await PublishersRepository.deleteByIdAsync(parseInt(id));

    if (!name) {
        throw new ServerError(`Author with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;