const {
    queryAsync
} = require('..');

const addAsync = async (name) => {
    console.info(`Adding publisher in database async...`);

    const publishers = await queryAsync('INSERT INTO publishers (name) VALUES ($1)', [name]);
    return publishers[0];
};

const getAllAsync = async () => {
    console.info(`Getting all publishers from database async...`);

    return await queryAsync('SELECT * FROM publishers');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the publisher with id ${id} from database async...`);

    const publishers = await queryAsync('SELECT * FROM publishers WHERE id = $1', [id]);
    return publishers[0];
};

const updateByIdAsync = async (id, name) => {
    console.info(`Updating the publisher with id ${id} from database async...`);

    const publishers = await queryAsync('UPDATE publishers SET name = $1 WHERE id = $2', [name, id]);
    return publishers[0];
};

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the publisher with id ${id} from database async...`);

    const publishers = await queryAsync('DELETE FROM publishers WHERE id = $1', [id]);
    return publishers[0];
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}
