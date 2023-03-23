const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const app = express();
mongoose
  .connect(
    "mongodb+srv://saakiretro:Vegas%4031@cluster1.o8ih3eb.mongodb.net/webd_1"
  )
  .then(() => {
    console.log("Connected to Mongo DB");
  });

app.use(express.json());
app.use(cors());

app.get("/api/user", (req, res, next) => {
  res.send("Hello from Express!");
});

app.post("/user/create", (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "New user has been added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

app.get("/user/getAll", (req, res, next) => {
  User.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        message: "All the users details have been fetched successfully",
        users: documents,
      });
    });
});

app.delete("/user/delete", (req, res, next) => {
  if (req.body.email) {
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0) {
        User.deleteOne({ email: req.body.email }).then((result) => {
          console.log(result);
          res.status(200).json({ message: "User has been deleted successfully" });
        });
      } else {
        res.status(200).json({ message: "User not found!" });
      }
    });
  } else {
    res.status(200).json({ message: "Please provide Email" });
  }
});

app.put("/user/edit", async (req, res) => {
  try {
    User.findOne({ email: req.body.email }, async (err, user) => {
      if (err) {
        return res.status(500).send({ message: "Error finding user", err });
      }

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      // Update the user's password and other fields as needed
      user.password = req.body.password;
      user.fullName = req.body.fullName;
      user.email = req.body.email;

      // Save the user
      try {
        await user.save();
        res.status(200).json({ message: "User has been updated successfully" });
      } catch (saveError) {
        res.status(500).send({ message: "Error updating user", saveError });
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Error processing request", error });
  }
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
