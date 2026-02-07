const express = require("express");
const path = require("path");

const app = express();

app.get("/data/:filename", (req, res) => {
  const filePath = path.join(__dirname, "data", req.params.filename);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("Arquivo não encontrado");
    }
  });
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from inside the very basic Node app...</h1>
  `);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
