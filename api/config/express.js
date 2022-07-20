const express = require('express');
const path = require('path');

module.exports = app => {
    // basic set up
    app.use('public', express.static(path.resolve('../../public')));
    app.use(express.urlencoded({ extended: true }));

    // custom middleware
}