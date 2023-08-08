const http = require("http");
const fs = require("fs/promises");
const { renderToPipeableStream } = require("react-dom/server");
import App from "./components/App.jsx";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  const html = await fs.readFile("./index.html");

  console.log(html);

  // renderToPipeableStream(<App />, {

  // });

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log("Server is running");
});
