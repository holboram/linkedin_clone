const express = require("express");
const router = express.Router();
const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readFile = util.promisify(fs.readFile);

router.get("/", async (req, res) => {
  let comments;

  try {
    comments = await readFile("./models/comments.json", "utf8");
    comments = JSON.parse(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }

  res.send(comments);
});

// Get all comments by post id
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;

  let comments;
  try {
    comments = await readFile("./models/comments.json", "utf8");
    comments = JSON.parse(comments);
    comments = comments.filter((comment) => comment.postId === postId);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  res.send(comments);
});

// Write a comment
router.post("/", async (req, res) => {
  let comments;

  try {
    comments = await readFile("./models/comments.json", "utf8");
    comments = JSON.parse(comments);

    const newCommentId = uuidv4();

    const newComment = Object.assign(
      { id: newCommentId, date: Date.now() },
      req.body
    );

    comments.push(newComment);

    fs.writeFile("./models/comments.json", JSON.stringify(comments), (err) => {
      res.status(201).json({
        status: " success",
        data: {
          comment: newComment,
        },
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }
});

module.exports = router;
