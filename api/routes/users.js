const express = require("express");
const router = express.Router();
const util = require("util");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");

const readFile = util.promisify(fs.readFile);

router.get("/", async (req, res) => {
  let users;

  try {
    users = await readFile("./models/users.json", "utf8");
    users = JSON.parse(users);
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }

  res.send(users);
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const includePosts = req.query.withPosts;

  let user;

  try {
    let users = await readFile("./models/users.json", "utf8");
    users = JSON.parse(users);

    user = users.find((user) => user.id === +userId);

    if (user) {
      if (includePosts === "true") {
        let posts = await readFile("./models/posts.json", "utf8");
        posts = JSON.parse(posts);
        const foundPosts = posts.filter((post) => post.userId === +user.id);

        res.send({
          ...user,
          posts: foundPosts,
        });
      } else {
        res.send(user);
      }
    }

    res.status(404).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

router.get("/:userId/feed", async (req, res) => {
  const userId = req.params.userId;
  let users;
  let posts;
  let result = [];

  try {
    users = await readFile("./models/users.json", "utf8");
    users = JSON.parse(users);
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }

  let user = users.find((user) => user.id === +userId);

  if (!user) {
    res.status(404).send();
    return;
  }

  const following = user.following;

  try {
    posts = await readFile("./models/posts.json", "utf8");
    posts = JSON.parse(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send();
    return;
  }

  following.forEach((userId) => {
    let followingUser = users.find((user) => user.id === +userId);
    const { name, profession, image } = followingUser;

    let feedPosts = posts.filter((post) => post.userId === +userId);

    const feedPostsWithUser = feedPosts.map((post) => {
      const feedPost = { ...post };
      feedPost.user = {
        name,
        profession,
        image,
      };

      return feedPost;
    });

    result = [...result, ...feedPostsWithUser];
  });

  res.send(result);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id * 1;

  let users = await readFile("./models/users.json", "utf8");
  users = JSON.parse(users);

  // Shallow copy of users array
  const newUsers = [...users];

  if (id > newUsers.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid User ID",
    });
  }

  try {
    // Finding the user with the id from the copy of users array
    const user = newUsers.find((el) => el.id * 1 === id);

    // Creating new user from merging the user with the req.body
    const newUser = { ...user, ...req.body };

    // Getting the index of the user to use it, to replace the user from the copy
    const userIndex = newUsers.indexOf(user);
    newUsers.splice(userIndex, 1, newUser);

    fs.writeFile("./models/users.json", JSON.stringify(newUsers), (err) => {
      res.status(200).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    });
  } catch {
    console.log(error);
    res.status(500).send();
    return;
  }
});

module.exports = router;
