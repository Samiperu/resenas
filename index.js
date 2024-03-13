/**
 * Codigo que se usa en la lamda
 * 
 * Para correr en local, usar `local.js`.
 */

const serverless = require("serverless-http");
const express = require("express");
const app = require("./src/app")
module.exports.handler = serverless(app);
