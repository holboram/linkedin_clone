const express = require("express");
const router = express.Router();
const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readFile = util.promisify(fs.readFile);

router.get("/", async (req, res) => {
  let posts;

  try {
    posts = await readFile("./models/posts.json", "utf8");
    posts = JSON.parse(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }

  res.send(posts);
});

// GET A CERTAIN POST -> detail view
router.get("/:id", async (req, res) => {
  let posts;

  try {
    posts = await readFile("./models/posts.json", "utf8");
    posts = JSON.parse(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }

  res.send(posts);
});

// GET ALL POSTS FOR A CERTAIN USER
router.get("/all/:userId", async (req, res) => {
  let posts;

  try {
    posts = await readFile("./models/posts.json", "utf8");
    posts = JSON.parse(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }

  res.send(posts);
});

// WRITE A POST

router.post("/", async (req, res) => {
  let posts;

  try {
    posts = await readFile("./models/posts.json", "utf8");
    posts = JSON.parse(posts);

    const newPostId = uuidv4();

    const newPost = Object.assign({ id: newPostId }, req.body);

    posts.push(newPost);

    fs.writeFile("./models/posts.json", JSON.stringify(posts), (err) => {
      res.status(201).json({
        status: "success",
        data: {
          posts: newPost,
        },
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }
});

// PATCH A POST
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  let posts = await readFile("./models/posts.json", "utf8");
  posts = JSON.parse(posts);

  const newPosts = [...posts];

  if (id > newPosts.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Post ID",
    });
  }

  try {
    const post = newPosts.find((el) => el.id === id);

    if (post.socialCounts.includes(req.body.socialCounts)) {
      return;
    }

    if (req.body.socialCounts) {
      post.socialCounts.push(req.body.socialCounts);
    }

    // if (!req.body.socialCounts) {
    // let newCommentId = 1;
    // if (post.comments.length !== 0) {
    //   newCommentId = post[post.comments.length - 1].id + 1;
    // }
    // const newComment = Object.assign({ id: newCommentId }, req.body);
    // post.comments.push(newComment);
    // }

    const newPost = { ...post };

    const postIndex = newPosts.indexOf(post);
    newPosts.splice(postIndex, 1, newPost);

    fs.writeFile("./models/posts.json", JSON.stringify(newPosts), (err) => {
      res.status(200).json({
        status: "success",
        data: {
          likes: newPost.socialCounts.length,
        },
      });
    });
  } catch {
    console.log(error);
    res.status(500).send();
    return;
  }
});

// Delete a post
router.delete("/:userId/:id", async (req, res) => {
  const { userId, id } = req.params;
  let posts = await readFile("./models/posts.json", "utf8");
  posts = JSON.parse(posts);

  // Shallow copy of posts array
  const newPosts = [...posts];

  // Finding the post with the id from the copy of posts array
  const post = newPosts.find((el) => el.id === id);

  if (!post) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Post ID",
    });
  }

  try {
    // Getting the index of the user to use it, to replace the user from the copy
    const postIndex = newPosts.indexOf(post);

    // Remove the post with the id from the array
    if (+userId !== post.userId) {
      return;
    }

    newPosts.splice(postIndex, 1);

    // Write the new array to json file
    fs.writeFile("./models/posts.json", JSON.stringify(newPosts), (err) => {
      res.status(204).json({
        status: "success",
        data: null,
      });
    });
  } catch {
    console.log(error);
    res.status(500).send();
    return;
  }
});

module.exports = router;
