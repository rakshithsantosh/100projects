const cloneexpress = require("./clone.js");

const app = cloneexpress();

app.getKaro("/", (req, res) => {
  console.log("get method");
});

app.postKaro("/post", (req, res) => {
  console.log("post is working ");
});

app.suno(3000, () => {
  console.log("port is runinh");
});
