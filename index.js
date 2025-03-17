// dependencies
const http = require("http");
const url = require("url");
const { handleReqRes } = require("./helpers/handelReqRes");


// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(app.config.port, () => {
    console.log(`server is running on port ${app.config.port}`);
  });
};

// handle request
app.handleRequest = handleReqRes;

app.createServer();
