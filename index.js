const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public_html/index.html");
});

app.use(express.static(__dirname + "/public_html"));

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
