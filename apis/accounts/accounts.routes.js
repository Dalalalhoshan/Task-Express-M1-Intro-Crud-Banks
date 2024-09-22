const express = require("express");
const accounts = require("../../accounts");
const {
  getAllAccounts,
  createAccount,
  getOneAccount,
  deleteAccount,
  updatedAccount,
} = require("./accounts.controller");
const accountRouter = express.Router();

//Fetch Accounts..DONE
accountRouter.get("/api/accounts", getAllAccounts);

//Create Account
accountRouter.post("/api/accounts", createAccount);

//Delete Account
accountRouter.delete("/api/accounts/:accountId", deleteAccount);

//Update Account

accountRouter.put("api/accounts/:accountId", updatedAccount);

//Bonus..DONE
accountRouter.get("/api/accounts/:username", getOneAccount);

module.exports = accountRouter;
