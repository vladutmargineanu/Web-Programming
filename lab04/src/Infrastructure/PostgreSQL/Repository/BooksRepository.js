const {
    queryAsync
} = require('..');

const addAsync = async (name, author_id) => {
    console.info(`Adding books in database async...`);

    const books = await queryAsync('INSERT INTO books (name, author_id) VALUES ($1, $2)', [name, author_id]);
    return books[0];
};

const getAllAsync = async () => {
    console.info(`Getting all books from database async...`);

    return await queryAsync('SELECT * FROM books');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the books with id ${id} from database async...`);

    const books = await queryAsync('SELECT * FROM books WHERE id = $1', [id]);
    return books[0];
};

const updateByIdAsync = async (id, name, author_id) => {
    console.info(`Updating the books with id ${id} from database async...`);

    const books = await queryAsync('UPDATE books SET name = $1, author_id = $2 WHERE id = $3', [name, author_id, id]);
    return books[0];
};

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the books with id ${id} from database async...`);

    const books = await queryAsync('DELETE FROM books WHERE id = $1', [id]);
    return books[0];
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}
