const http = require("http");

const methods = [];

function cloneexpress() {
  function handlerFunction(req, res) {
    let route;
    for (let i = 0; i < methods.length; i++) {
      if (methods[i].type === req.method && methods[i].path === req.url) {
        route = methods[i];
      }
    }
    if (route !== undefined) {
      route.callback(req, res);
    } else {
      res.end("this route does not exits");
    }
  }

  const server = http.createServer(handlerFunction);
  function getKaro(path, callback) {
    methods.push({ type: "GET", path, callback });
  }
  function postKaro(path, callback) {
    methods.push({ type: "POST", path, callback });
  }
  function suno(port, callback) {
    server.listen(port, callback);
  }
  return { suno, getKaro, postKaro };
}

module.exports = cloneexpress;
