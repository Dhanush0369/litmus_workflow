const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl || "http://localhost:3000",
    requestTimeout: 60000,
    responseTimeout: 60000
  },
  env: {
    username: 'admin',
    password: 'litmus'
  },
});
