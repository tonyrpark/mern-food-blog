const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const db = require("./db/db");
const postRouter = require("./Routes/post");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());
const PORT = process.env.PORT || 3000;
app.use("/api/posts", postRouter);
app.listen(PORT, (req, res) => {
  console.log(`app is listening to PORT ${PORT}`);
});

/* Below is code to create RESTful APIs using Express JS Routes */

//CREATE OPERATION

router.post("", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post
    .save()
    .then((post) => {
      if (post) {
        res.status(201).json({
          message: "Post added successfully",
          post: {
            ...post,
            id: post._id,
          },
        });
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

// READ OPERATION
router.get("/mypost", (req, res, next) => {
  Post.find({ creator: req.userData.userId })
    .then((post) => {
      if (post) {
        res.status(200).json({
          message: "Posts fetched successfully!",
          posts: post,
        });
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

//UPDATE OPERATION
router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    if (result) {
      res.status(200).json({ message: "Update successful!" });
    } else {
      res.status(500).json({ message: "Error Upating Post" });
    }
  });
});

//DELETE OPERATION
router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(
    (result) => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        return res.status(401).json({ message: "Not authorized!!" });
      }
    }
  );
});
