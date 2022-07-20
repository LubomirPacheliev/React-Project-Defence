const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

module.exports = app => {
    // basic set up
    app.use('public', express.static(path.resolve('../../public')));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    // custom middleware
}