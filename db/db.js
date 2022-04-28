const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const url =
  "mongodb://tonyrpark:<password>@cluster0-shard-00-00.ecaql.mongodb.net:27017?ssl=true&replicaSet=atlas-ceza4t-shard-0&authSource=admin&retryWrites=true&w=majority";

  mongodb+srv://tonyrpark:PqKbXn9g5oKiIKIw@mern-food-blog.r0s9n.mongodb.net/mern-food-blog?retryWrites=true&w=majority

// Connect MongoDB at default port 27017.
let mong = mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
