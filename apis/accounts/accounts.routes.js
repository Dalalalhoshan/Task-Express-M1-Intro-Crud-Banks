const express = require("express");
const {
  getAllAccounts,
  createAccount,
  getOneAccount,
  deleteAccount,
  updatedAccount,
} = require("./accounts.controller");
const accountRouter = express.Router(); // this is a router that handles everything

accountRouter.get("/accounts", getAllAccounts);

accountRouter.post("/accounts", createAccount);

accountRouter.delete("/accounts/:accountId", deleteAccount);

accountRouter.put("/accounts/:accountId", updatedAccount);

accountRouter.get("/accounts/:username", getOneAccount);

module.exports = accountRouter;
