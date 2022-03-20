"use strict";

const path = require("path");
const express = require("express");

const app = express();

const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");

const PORT = process.env.PORT || 5000;

app.use(express.json());

// MIDDLEWARE

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
