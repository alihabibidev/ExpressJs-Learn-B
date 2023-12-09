const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("welcome routing:)");
  // res.send('hello expressJs');
  //   res.send("<h1>hello expressJs</h1>");
  //   res.statusCode = 200;
  res.status(200).send({ message: "hello expressJs" });
});

app.get("/users", function (req, res) {
  res.status(200).json({
    users: [
      { id: 1, name: "user1" },
      { id: 2, name: "user2" },
      { id: 3, name: "user3" },
    ],
  });
});

app.listen(3000, () => {
  console.log("server run on port 3000");
});
