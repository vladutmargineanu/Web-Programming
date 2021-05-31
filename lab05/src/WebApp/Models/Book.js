const ServerError = require('./ServerError.js');
const validator = require('validator');

class BookPostBody {
    constructor(body) {
        this.name = body.name;
        this.author_id = body.author_id;

        if (this.name == null) {
            throw new ServerError("Name is missing", 400);
        }

        if (this.author_id == null || !validator.isInt(author_id)) {
            throw new ServerError("Author id is missing", 400);
        }
    }

    get Name() {
        return this.name;
    }

    get AuthorId() {
        return this.author_id;
    }
}

class BookPutBody extends BookPostBody {
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

class BookResponse {
    constructor(book) {
        this.name = book.name;
        this.author_id = book.author_id;
        this.id = book.id;
    }
}

module.exports = {
    BookPostBody,
    BookPutBody,
    BookResponse
}