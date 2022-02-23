const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const db = require("../database/dbConfig");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

// Get
server.get("/", async (req, res) => {
  try {
    const newschema = await db("newschema");
    res.json(newschema);
  } catch (err) {
    console.log(err);
  }
});

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const currentVision = await db("newschema").where({ id });
    currentVision.length === 0
      ? res.status(404).json({ message: "User not found" })
      : res.status(200).json(currentVision);
  } catch (err) {
    console.log(err);
  }
});

// Post
server.post("/", async (req, res) => {
  const { firstname, lastname, email } = req.body;
  try {
    await db("newschema").insert({ firstname, lastname, email });
    res.status(201).json({ message: "Message successfully stored" });
  } catch (err) {
    console.log(err);
  }
});

// Update
server.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  if (!message) {
    return res
      .status(400)
      .json({ message: "You must include a message in your request" });
  }
  try {
    await db("finevision").where({ id }).update({ message });
    res.status(200).json({ message: "Update Successful!" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = server;
