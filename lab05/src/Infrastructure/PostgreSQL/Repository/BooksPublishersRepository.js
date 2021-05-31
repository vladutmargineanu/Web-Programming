const {
    queryAsync
} = require('..');

const addAsync = async (book_id, publishers_id, price) => {
    console.info(`Adding publisher_book in database async...`);

    const publishers_books = await queryAsync('INSERT INTO publishers_books (book_id, publishers_id, price) VALUES ($1, $2, $3) RETURNING *', [book_id, publishers_id, price]);
    return publishers_books[0];
};

const updateByIdAsync = async (id, book_id, publishers_id, price) => {
    console.info(`Updating the publishers_books with id ${id} from database async...`);

    const publishers_books = await queryAsync('UPDATE publishers_books SET price = $3  WHERE book_id = $1 AND publishers_id = $2 RETURNING *', [book_id, publishers_id, price]);
    return publishers_books[0];
};

const deleteByIdAsync = async (id, book_id, publishers_id, price) => {
    console.info(`Deleting the publishers_books with id ${id} from database async...`);

    const publishers_books = await queryAsync('DELETE FROM publishers_books WHERE id = $1 RETURNING *', [id]);
    return publishers_books[0];

};

module.exports = {
    addAsync,
    updateByIdAsync,
    deleteByIdAsync
}