const userModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants');

const registerUser = async (username, email, password) => {
    const alreadyExists = await findUserByEmail(email);
    if (alreadyExists.length > 0) throw new Error('User already exists.');

    const hash = await bcrypt.hash(password, 10);
    const user = new userModel({
        username: username,
        email: email,
        password: password
    });
    await user.validate();
    user.password = hash;
    await user.save();

    const token = await generateJWT(user);
    return token;
}

const loginUser = async (username, password) => {
    const user = (await findUserByEmail(username))[0];
    if (!user) throw new Error('Either the username or the password is wrong.');

    const hasMatch = await bcrypt.compare(password, user.password);
    if (!hasMatch) throw new Error('Wrong password.');

    const token = await generateJWT(user);
    return token;
}

const findUserByEmail = async email => {
    const user = await userModel.find({ email: email });
    return user;
}

const generateJWT = async user => {
    try {
        const payload = { _id: user._id, username: user.username };
        return jwt.sign(payload, SECRET, { expiresIn: '2d' }); // TODO: Probably has to be done with new Promise
    } catch (e) {
        console.error(`Problem with JWT. Error: ${e}`);
    }
}

const validateJWT = async token => {
    if (!token) return [];

    try {
        const decoded = await jwt.verify(token, SECRET, [{ complete: true }, (err, token) => {
            if (err) throw new Error(`JWT Verify Excpetion: ${err}`);
            return token;
        }]);

        if (!decoded) throw new Error(`JWT verification didn't work.`);

        return [decoded];
    } catch (e) {
        console.error(e);
    }

    return [];
}

module.exports = {
    registerUser,
    loginUser,
    findUserByUsername: findUserByEmail,
    generateJWT,
    validateJWT
}