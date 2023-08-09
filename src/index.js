import React from "react";
import App from "./components/App.jsx";
import { renderToString } from "react-dom/server";

import http from "http";
import fs from "fs/promises";
import path from "path";

// esm에서 __dirname을 사용하기 위해 (commonjs에서만 __dirname을 지원한다)
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  let html = await fs.readFile(path.join(__dirname, "/index.html"), "utf8");

  const app = React.createElement(App);
  const stringApp = renderToString(app);

  html = html.replace(
    `<div id="root"></div>`,
    `<div id="root">${stringApp}</div>`
  );

  res.end(html);
});

server.listen(port, hostname, () => {
  console.log("Server is running");
});
