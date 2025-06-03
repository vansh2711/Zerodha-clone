const User = require("../model/userModel");
const {OrdersModel} = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositonsModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user, userId: user.username, });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true,userId: user.username,  });// Add userId here
       next()
    } catch (error) {
      console.error(error);
    }
  }

  module.exports.Holdings = async(req,res)=>{
    let allholding = await HoldingsModel.find({});
    res.send(allholding);
}

module.exports.Positions = async(req,res)=>{
    let allpositions = await PositionsModel.find({});
    res.send(allpositions);
}


module.exports.Orders = async(req,res)=>{
    let allorders = await OrdersModel.find({});
    res.send(allorders);
}

module.exports.NewOrder = async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    time:  new Date().toLocaleString("en-IN"),
  });

  newOrder.save();

  res.send("Order saved!");
}


  
