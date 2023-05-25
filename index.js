const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());


mongoose.connect(
  "mongodb+srv://EmailSys:EmailSys123@cluster0.4ofpsgs.mongodb.net/usermanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.get("/getUsers", async (req, res) => {  //req get info that sent from front to back. res back to front
  try {
    const result = await UserModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});
//login POST


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try{
    
    const user = await UserModel.findOne({ username, password});

    if (user && user.password == pasword) {

      res.json({ message: "Login Success" });
    } else {
      res.status(401).json({ message: "Invalid username or password "});
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error "});
  }
});

//POST to DB with appropriate schema

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.post("/connectWithGoogle"), async (req, res) => {
  const 
}

app.listen(3001, () => {
  console.log("Server is running");
});

