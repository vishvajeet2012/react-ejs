const express = require('express');
const apiRouter = require("./router/api");

const userData = [
  {
    userName: "vishu bhai",
  },
];

const server = express();

// Middleware to parse JSON data from incoming requests
server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello this is vishu ");
});

// Route to handle form submission from the frontend
server.post("/api/form", (req, res) => {
  const { inputValue } = req.body;  // Extract the data from the request body
  console.log("Received form data:", inputValue);

  // Add received data to userData (or handle it however you need)
  userData.push({ userName: inputValue });

  // Respond to the client
  res.json({ message: "Form data received successfully", userData });
});

server.get("/data", (req, res) => {
  const data = req.query;
  userData.push(data);
  res.send(userData);
});

server.get("/thisis", (req, res) => {
  const gotdata = req.query;
  userData.push(gotdata);
  res.send(userData);
});

server.get("/frontend", (req, res) => {
  const userQuery = req.query;
  userData.push(userQuery);
  res.render("./index.ejs");
});

server.get("/anii", (req, res) => {
  res.render("./index2.ejs");
});

server.use("/api", apiRouter);
server.set("view engine", "ejs");

let port = 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
