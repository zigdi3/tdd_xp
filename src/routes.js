const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Diego",
  email: "diegozigoto@gmail.com",
  password_hash: "123424r534535635634",
});

module.exports = routes;
