const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //return response.send("Hello World");
  return response.json({
    aluno: "Joao Emerson",
  });
});

app.listen(3333);
