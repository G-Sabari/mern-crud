const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
require("dotenv").config();
console.log("MongoDB URI:", process.env.MONGO_URI);


const app = express();
app.use(cors());
app.use(express.json());

// ✅ Proper MongoDB Connection with logs
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ GET all users
app.get("/", (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err }));
});

// ✅ GET single user by ID
app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err }));
});

// ✅ UPDATE user
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err }));
});

// ✅ DELETE user
app.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err }));
});

// ✅ CREATE user
app.post("/createUser", (req, res) => {
  console.log("Received:", req.body); // See in terminal
  UserModel.create(req.body)
    .then(user => {
      console.log("Inserted:", user);
      res.json(user);
    })
    .catch(err => {
      console.error("Insert Error:", err);
      res.status(500).json({ error: err });
    });
});

app.listen(3001, () => {
  console.log("Server is Running on http://localhost:3001");
});
