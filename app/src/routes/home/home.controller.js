"use strict";

const home = (req, res)=> {
    res.render("home/index");
}

const login = (req, res)=> {
    res.render("home/login");
}

module.exports = {
    home, // home: home,
    login, // login: login,
};