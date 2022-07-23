const userModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants');

const registerUser = async (username, email, password) => {
    const alreadyExists = await findUserByUsername(email);
    if (alreadyExists.length > 0) throw new Error('User already exists.');

    const hash = await bcrypt.hash(password, 10);
    const user = new userModel({
        username: username,
        email: email,
        password: hash
    });
    await user.save();

    const token = await generateJWT(user);
    return token;
}

const loginUser = async (username, password) => {
    const user = (await findUserByUsername(username))[0];
    if (!user) throw new Error('Either the username or the password is wrong.');

    const hasMatch = await bcrypt.compare(password, user.password);
    if (!hasMatch) throw new Error('Wrong password.');

    const token = await generateJWT(user);
    return token;
}

const findUserByUsername = async (username) => {
    const user = await userModel.find({ username: username });
    return user;
}

const generateJWT = async user => {
    try {
        const payload = { _id: user._id, username: user.username };
        return await jwt.sign(payload, SECRET, { expiresIn: '2d' }); // TODO: Probably has to be done with new Promise
    } catch (e) {
        console.error(`Problem with JWT. Error: ${e}`);
    }
}

module.exports = {
    registerUser,
    loginUser,
    findUserByUsername,
    generateJWT
}