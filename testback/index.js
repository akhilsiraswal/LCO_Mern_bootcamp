const express = require("express");

const app = express();

const port = 9000;

app.get("/", (req, res) => {
  return res.send("Home dashboard");
});

const admin = (req, res) => {
  return res.send("this is admin dashboard");
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin is running");
  next();
};

app.get("/admin", isAdmin, admin);

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get("/dignup", (req, res) => {
  return res.send("You are visiting signup route");
});
app.listen(port, () => {
  console.log("Server is up and running... ");
});

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))