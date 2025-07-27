const  express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Users")
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json()); 

// mongoose.connect(process.env.MONGODB_URL)
//   .then(() => console.log("MongoDB connected!"))
//   .catch((err) => console.error("MongoDB connection error:", err));

mongoose.connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/crud");


//get 
app.get("/",(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getuser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},
        {
            name:req.body.name,
            email:req.body.email,
            age:req.body.age
        })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteuser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => { //New Api
  console.log("Received:", req.body);
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.listen(3001,()=>{
    console.log("Server is Running!!")
})