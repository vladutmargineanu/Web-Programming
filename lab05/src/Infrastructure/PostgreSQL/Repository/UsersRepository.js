const {
    queryAsync
} = require('..');

const getAllAsync = async() => {
    console.info ('Getting all users from database');
    
    return await queryAsync('SELECT id, username, role_id FROM users');
};

const addAsync = async (username, password) => {
    console.info(`Adding user ${username}`);

    const users = await queryAsync('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, role_id', [username, password]);
    return users[0];
};

const getByUsernameWithRoleAsync = async (username) => {
    console.info(`Getting user with username ${username}`);
    
    const users = await queryAsync(`SELECT u.id, u.password, 
                                u.username, r.value as role,
                                r.id as role_id FROM users u 
                                JOIN roles r ON r.id = u.role_id
                                WHERE u.username = $1`, [username]);
    return users[0];
};

const updateByIdAsync = async (id, username, password, roleId) => {
    console.info(`Updating the users with id ${id} from database async...`);

    const users = await queryAsync('UPDATE users SET username = $1, password = $2 WHERE id = $3 AND role_id = $4 RETURNING *', [username, password, id, roleId]);
    return users[0];
};

module.exports = {
    getAllAsync,
    addAsync,
    getByUsernameWithRoleAsync,
    updateByIdAsync
}