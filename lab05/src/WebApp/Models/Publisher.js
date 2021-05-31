const ServerError = require('./ServerError.js');

class PublisherPostBody {
    constructor(body) {
        this.name = body.name;

        if (this.name == null || this.name.length < 4) {
            throw new ServerError("First name is missing", 400);
        }
    }

    get Name() {
        return this.name;
    }
}

class PublisherPutBody extends PublisherPostBody {
    constructor(body, id) {
        super(body);
        this.id = parseInt(id);

        if (!this.id || this.id < 1) {
            throw new ServerError("Id should be a positive integer", 400);
        }
    }

    get Id() {
        return this.id;
    }
}

class PublisherResponse {
    constructor(author) {
        this.name = author.name;
        this.id = author.id;
    }
}

module.exports = {
    PublisherPostBody,
    PublisherPutBody,
    PublisherResponse
}