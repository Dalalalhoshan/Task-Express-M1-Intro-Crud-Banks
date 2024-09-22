const getAllAccounts = (request, responce) => {
  return responce.status(200).json({ data: accounts });
};

const createAccount = (request, responce) => {
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
};

const getOneAccount = (request, responce) => {
  const { username } = request.params;
  const account = accounts.find((account) => {
    if (account.username == username) return true;
  });

  if (!account) {
    return responce.status(404).json({ error: "Account Does Not Exist" });
  } else {
    return responce.status(200).json({ data: account });
  }
};

const deleteAccount = (request, responce) => {
  const { id } = request.params;
  const updatedAccounts = accounts.filter((account) => {
    if (account.id != id) {
      return true;
    }
  });
  responce.status(200).json({ data: updatedAccounts });
};

const updatedAccount = (request, responce) => {
  const { id } = request.params;
  const accountFound = accounts.find((account) => {
    if (account.id == id) {
      return true;
    }
  });

  accountFound.funds = request.body.funds;

  return responce.statusMessage(200).json({ data: accountFound });
};

module.exports = {
  getAllAccounts,
  createAccount,
  getOneAccount,
  deleteAccount,
};
