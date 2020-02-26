const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);
const knex = require("../data/db-config");

const sessionConfig = {
  // session storage options
  name: "chip",
  secret: "keep it a secret",
  saveUninitialized: true,
  resave: false,

  //how to store our sessions so it persist even when the server refresh
  store: new knexSessionStore({
    knex,
    clearTimeout: 1000 * 60 * 10,
    createTable: true,
    sidfieldname: "sid",

    //optional
    tablename: "sessions"
  }),
  //cookie options
  cookie: {
    maxAge: 1000 * 60 * 10, //10mins in milliseconds
    secure: false,
    httpOnly: true
  }
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};
