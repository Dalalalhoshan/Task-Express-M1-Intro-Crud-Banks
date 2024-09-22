const express = require("express");
const accounts = require("./accounts");
const { request } = require("http");
const { error } = require("console");
const PORT = 9000;
const app = express();
app.use(express.json); //this is to tell my app that it'll recive requests in the form of json

//Fetch Accounts..DONE
app.get("/api/accounts", (request, responce) => {
  return responce.status(200).json({ data: accounts });
});

//Create Account
app.post("/api/accounts", (request, responce) => {
  let length = accounts.length;
  let newID = accounts[length - 1].id + 1;
  // console.log(newID);
  // console.log(request.body);
  const newAccount = {
    id: newID,
    // username: request.body.username,
    ...request.body,
  };
  accounts.push(newAccount);
  return responce.status(201).json({ data: accounts });
});

//Delete Account

//Update Account

//Bonus..DONE
app.get("/api/accounts/:username", (request, responce) => {
  const { username } = request.params;
  const account = accounts.find((account) => {
    if (account.username == username) return true;
  });

  if (!account) {
    return responce.status(404).json({ error: "Account Does Not Exist" });
  } else {
    return responce.status(200).json({ data: account });
  }
});

//listen..DONE
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
