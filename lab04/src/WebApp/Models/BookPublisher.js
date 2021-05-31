const ServerError = require('./ServerError.js');
const validator = require('validator');

class BookPublisherPostBody {
    constructor(body) {
        this.book_id = body.book_id;
        this.publisher_id = body.publisher_id;
        this.price = body.price;

        if (this.author_id == null || !validator.isInt(book_id)) {
            throw new ServerError("Author id is missing", 400);
        }

        if (this.publisher_id == null || !validator.isInt(publisher_id)) {
            throw new ServerError("Publisher id is missing", 400);
        }

        if (this.price == null || !validator.isDouble(price)) {
            throw new ServerError("Price is missing", 400);
        }
    }

    get BookId() {
        return this.book_id;
    }

    get PublisherId() {
        return this.publisher_id;
    }

    get Price() {
        return this.price;
    }
}

class BookPublisherPutBody extends BookPublisherPostBody {
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

class BookPublisherResponse {
    constructor(publishers_book) {
        this.book_id = publishers_book.book_id;
        this.publisher_id = publishers_book.publisher_id;
        this.price = publishers_book.price;
        this.id = publishers_book.id;
    }
}

module.exports = {
    BookPublisherPostBody,
    BookPublisherPutBody,
    BookPublisherResponse
}