const express = require("express");
const accountRouter = require("./apis/accounts/accounts.routes");
const PORT = 9000;
const app = express();
app.use(express.json); //this is to tell my app that it'll recive requests in the form of json
app.use("/api", accountRouter);

//listen..DONE
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
