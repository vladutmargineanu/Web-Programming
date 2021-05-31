const UsersRepository = require('../../Infrastructure/PostgreSQL/Repository/UsersRepository.js');
const AuthenticatedUserDto = require('../DTOs/AuthenticatedUserDto.js');
const RegisteredUserDto = require('../DTOs/RegisteredUserDto.js');
const JwtPayloadDto = require('../DTOs/JwtPayloadDto.js');

const { hashPassword, comparePlainTextToHashedPassword } = require('../Security/Password')
const { generateTokenAsync } = require('../Security/Jwt');

const authenticateAsync = async (username, plainTextPassword) => {

    console.info(`Authenticates user with username ${username}`);

    const user = await UsersRepository.getByUsernameWithRoleAsync(username);
    
    if (!user) {
        throw new ServerError(`Utilizatorul cu username ${username} nu exista in sistem!`, 404);
    }

    const userResult = user[0];

    // pas 1: verifica daca parola este buna (hint: functia compare)
    const passwordMatch = await comparePlainTextToHashedPassword(plainTextPassword, userResult.password);
    console.log(`passwordMatch: ${passwordMatch}`);

    // pas 1.1.: compare returneaza true sau false. Daca parola nu e buna, arunca eroare
    if (!passwordMatch) {
        throw new Error('Parola gresita!');
    } else {
        console.log("Parola corecta!");
    }

    // pas 2: genereaza token cu payload-ul JwtPayload
    const jwtPayloadDto = new JwtPayloadDto(userResult.id, userResult.role);
    const token = await generateTokenAsync({
        jwtPayloadDto
    });
    console.log(`token: ${token}`);

    // pas 3: returneaza AuthenticatedUserDto
    return new AuthenticatedUserDto(token, userResult.username, userResult.role);
}

const registerAsync = async (username, plainTextPassword) => {

    // pas 1: cripteaza parola
    const encrypted = await hashPassword(plainTextPassword);
    console.log(`password: ${password} | encrypted: ${encrypted}`);

    // pas 2: adauga (username, parola criptata) in baza de date folosind UsersRepository.addAsync
    const user = UsersRepository.addAsync(username, encrypted);

    // pas 3: returneaza RegisteredUserDto
    return new RegisteredUserDto(user.id, user.username, user.role);
};

module.exports = {
    authenticateAsync,
    registerAsync
}