const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public_html/index.html");
});

app.use(express.static(__dirname + "/public_html"));

server.listen(PORT, () => {
  console.log("listening on http://localhost:", PORT);
});
